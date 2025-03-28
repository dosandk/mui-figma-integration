
import figma from "@figma/code-connect";
import { CollectionsBookmark } from "@mui/icons-material";

figma.connect(
  CollectionsBookmark,
  "<FIGMA_ICONS_BASE>?node-id=11673:13214",
  {
    props: {

    },
    example: ({ ...props }) => <CollectionsBookmark {...props} />
  }
);
