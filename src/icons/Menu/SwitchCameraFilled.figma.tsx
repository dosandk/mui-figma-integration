
import figma from "@figma/code-connect";
import {SwitchCameraFilled} from "@mui/icons-material";

figma.connect(
  SwitchCameraFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13158",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwitchCameraFilled {...props} />
  }
);