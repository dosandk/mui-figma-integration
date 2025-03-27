
import figma from "@figma/code-connect";
import { DocumentScanner } from "@mui/icons-material";

figma.connect(
  DocumentScanner,
  "<FIGMA_ICONS_BASE>?node-id=11673:13228",
  {
    props: {

    },
    example: ({ ...props }) => <DocumentScanner {...props} />
  }
);
