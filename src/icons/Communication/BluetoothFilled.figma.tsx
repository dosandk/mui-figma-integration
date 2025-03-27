
import figma from "@figma/code-connect";
import {BluetoothFilled} from "@mui/icons-material";

figma.connect(
  BluetoothFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112262",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BluetoothFilled {...props} />
  }
);