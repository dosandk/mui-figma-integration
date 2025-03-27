
import figma from "@figma/code-connect";
import { BeachAccess } from "@mui/icons-material";

figma.connect(
  BeachAccess,
  "<FIGMA_ICONS_BASE>?node-id=9602:112418",
  {
    props: {

    },
    example: ({ ...props }) => <BeachAccess {...props} />
  }
);
