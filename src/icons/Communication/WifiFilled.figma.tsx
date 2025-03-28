
import figma from "@figma/code-connect";
import { Wifi } from "@mui/icons-material";

figma.connect(
  Wifi,
  "<FIGMA_ICONS_BASE>?node-id=9602:112399",
  {
    props: {

    },
    example: ({ ...props }) => <Wifi {...props} />
  }
);
