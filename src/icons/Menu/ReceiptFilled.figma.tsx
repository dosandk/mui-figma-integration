
import figma from "@figma/code-connect";
import { Receipt } from "@mui/icons-material";

figma.connect(
  Receipt,
  "<FIGMA_ICONS_BASE>?node-id=7475:72641",
  {
    props: {

    },
    example: ({ ...props }) => <Receipt {...props} />
  }
);
