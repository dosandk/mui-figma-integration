import fs from "fs";
import path from 'path';

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

const URL_BASE = "https://api.figma.com/v1/files";
const ICON_VARIANT_NAME = "Size=16";

const iconsRanges = {
  "Menu": "11673:13140",
  "Date & Time": "11673:11057",
  "E-commerce": "11673:11178",
  "Arrows": "11673:11318",
  "Users and People": "11673:11683",
  "Communication": "11673:11998",
  "Map": "11673:12160",
  "Text editor": "11673:12261",
  "Success-warning": "11673:12368",
  "Security": "11673:12475",
  "Math": "11673:12599",
  "Navigation": "11673:12646",
  "File": "11673:12792",
  "Magnifying glass": "11673:13010",
  "Settings": "11673:13034",
  "Edit": "11673:12538",
  "Favorite": "11673:13095",
  "Images": "11673:13276",
  "Buildings": "11673:13319"
};
const ICONS_SET_NAME = "Arrows"
const ROOT_TRAVERSE_IDS = ["6594:47638", iconsRanges[ICONS_SET_NAME]]; // Page ID > Section ID
const SKIP_REST_API = process.argv.includes("--skip-rest-api");

const SRC_DIR = `./src/icons/${ICONS_SET_NAME}`;

if (!fs.existsSync(SRC_DIR)) {
  fs.mkdirSync(SRC_DIR, { recursive: true });
  console.log(`Directory created: ${SRC_DIR}`);
}

async function go() {
  if (!SKIP_REST_API) {
    const data = await getIconComponents();

    const names = data.map((a) => a[0]).sort();

    fs.writeFileSync(
      path.join(SRC_DIR, "Icons.figma.txt"),
      `import figma from "@figma/code-connect";\nimport {${names.join(", ")}} from "icons";`,
    );

    fs.writeFileSync(
      path.join(SRC_DIR, "icons-index.txt"),
      names.map((n) => {
        return `export { ${n} } from "./${n}.tsx";`
      }).join("\n"),
    );

    fs.writeFileSync(path.join(SRC_DIR, "icons.json"), JSON.stringify(data, null, 2));
  }

  const json = JSON.parse(fs.readFileSync(path.join(SRC_DIR, "icons.json")));


  fs.copyFileSync(path.join(SRC_DIR, "icons-index.txt"), path.join(SRC_DIR, "index.tsx"));

  const figmaStarter = fs.readFileSync(path.join(SRC_DIR, "Icons.figma.txt"));

  fs.writeFileSync(
    path.join(SRC_DIR, "Icons.figma.tsx"),
    `${figmaStarter}\n${json.map((a) => a[2]).join("\n")}`,
  );


  const figmaFilesPromises = json.map(([fileName, figmaContent]) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(SRC_DIR, `${fileName}.figma.tsx`),
        figmaContent,
        (err) => (err ? reject(err) : resolve()),
      );
    })
  });

  await Promise.all(figmaFilesPromises);

  console.log("DONE!");
}

go();

/**
 * Getting all file data from Figma, then parsing it into icon component data
 * @link https://www.figma.com/developers/api#get-files-endpoint
 * @returns {Promise<string[][]>}
 */
async function getIconComponents() {
  try {
    const url = `${URL_BASE}/${FILE_KEY}`;

    const fileResponse = await fetch(url, {
      method: "GET",
      headers: { "X-FIGMA-TOKEN": TOKEN },
    });
    const data = await fileResponse.json();
    return await fileRESTResponseToIconComponentsJSON(data);
  } catch (e) {
    throw e;
  }
}

/**
 * Traverse a Figma file response for all icons, get their svg image data,
 *   and transform it into the data we're storing locally.
 * @param {{document: Node}} response Figma GET file response
 * @returns {Promise<string[][]>} - Array<[IconName, IconSVGString, IconCodeConnectString]>
 */
async function fileRESTResponseToIconComponentsJSON(response) {
  // Starting parent node is the document. Will traverse children to find icons' parent.
  let parentNode = response.document;

  // Traversing from root to the icon parent node (likely a page or section)
  // This constant is an array of ids to follow to get to the icons.
  ROOT_TRAVERSE_IDS.forEach(
    (id) => (parentNode = parentNode.children.find((a) => a.id === id)),
  );
  const idsToNameAndComponentSetId = {};

  if (parentNode) {
    // For each child of the parent node, find the icons (variant or main component)
    parentNode.children.forEach((component) => {
      // The icon. Is either a child of a component set or the component itself.
      // Any other node type we ignore.
      console.log(component);
      const icon =
        component.type === "COMPONENT_SET"
          ? component.children.find((child) => child.name === ICON_VARIANT_NAME)
          : component.type === "COMPONENT"
            ? component
            : null;
      if (icon) {
        idsToNameAndComponentSetId[icon.id] = [
          component.name
            .split(/[^a-zA-Z0-9]+/)
            .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
            .join(""),
          component.id,
        ];
      }
    });
  }
  const nodeIds = Object.keys(idsToNameAndComponentSetId);
  const result = [];
  const fails = [];

  await Promise.all(
    nodeIds.map(async (nodeId) => {
      try {
        await processNodeId(nodeId);
      } catch (e) {
        fails.push(nodeId);
        console.log("Failed once:", nodeId);
      }
    }),
  );

  console.log(`Retrying ${fails.length} failure(s)...`);

  // Second attempt for failed attempts.
  await Promise.all(
    fails.map(async (nodeId) => {
      try {
        await processNodeId(nodeId);
      } catch (e) {
        console.error(e);
        console.log(
          "Failed again:",
          nodeId,
          ...idsToNameAndComponentSetId[nodeId],
        );
      }
    }),
  );

  /**
   * Get the component name, svg code strings, and code connect doc strings
   * @param {string} nodeId
   */
  async function processNodeId(nodeId) {
    const [name, componentSetId] = idsToNameAndComponentSetId[nodeId];
    const figmaString = [];

    figmaString.push(
      `
import figma from "@figma/code-connect";
import {${name}} from "@mui/icons-material";

figma.connect(
  ${name}, 
  "<FIGMA_ICONS_BASE>?node-id=${componentSetId}",
  { 
    props: {
    
    },
    example: ({ ...props }) => <${name} {...props} />
  }
);`,
    );

    result.push([name, figmaString.join("\n")]);
  }

  return result;
}

