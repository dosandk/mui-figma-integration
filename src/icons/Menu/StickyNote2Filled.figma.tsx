
import figma from "@figma/code-connect";
import { StickyNote2 } from "@mui/icons-material";

figma.connect(
  StickyNote2,
  "<FIGMA_ICONS_BASE>?node-id=11673:13208",
  {
    props: {

    },
    example: ({ ...props }) => <StickyNote2 {...props} />
  }
);
