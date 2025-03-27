
import figma from "@figma/code-connect";
import { Layers } from "@mui/icons-material";

figma.connect(
  Layers,
  "<FIGMA_ICONS_BASE>?node-id=9602:112411",
  {
    props: {

    },
    example: ({ ...props }) => <Layers {...props} />
  }
);
