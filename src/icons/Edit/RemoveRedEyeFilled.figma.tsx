
import figma from "@figma/code-connect";
import { RemoveRedEye } from "@mui/icons-material";

figma.connect(
  RemoveRedEye,
  "<FIGMA_ICONS_BASE>?node-id=7475:59914",
  {
    props: {

    },
    example: ({ ...props }) => <RemoveRedEye {...props} />
  }
);
