
import figma from "@figma/code-connect";
import { ContentPasteGo } from "@mui/icons-material";

figma.connect(
  ContentPasteGo,
  "<FIGMA_ICONS_BASE>?node-id=11673:13178",
  {
    props: {

    },
    example: ({ ...props }) => <ContentPasteGo {...props} />
  }
);
