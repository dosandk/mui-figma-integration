
import figma from "@figma/code-connect";
import { SaveAlt } from "@mui/icons-material";

figma.connect(
  SaveAlt,
  "<FIGMA_ICONS_BASE>?node-id=208:101689",
  {
    props: {

    },
    example: ({ ...props }) => <SaveAlt {...props} />
  }
);
