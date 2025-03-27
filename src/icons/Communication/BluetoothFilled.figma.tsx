
import figma from "@figma/code-connect";
import { Bluetooth } from "@mui/icons-material";

figma.connect(
  Bluetooth,
  "<FIGMA_ICONS_BASE>?node-id=9602:112262",
  {
    props: {

    },
    example: ({ ...props }) => <Bluetooth {...props} />
  }
);
