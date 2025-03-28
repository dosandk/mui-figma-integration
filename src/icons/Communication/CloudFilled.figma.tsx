
import figma from "@figma/code-connect";
import { Cloud } from "@mui/icons-material";

figma.connect(
  Cloud,
  "<FIGMA_ICONS_BASE>?node-id=7475:61450",
  {
    props: {

    },
    example: ({ ...props }) => <Cloud {...props} />
  }
);
