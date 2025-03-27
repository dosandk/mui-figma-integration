
import figma from "@figma/code-connect";
import {PinDropOutlined} from "@mui/icons-material";

figma.connect(
  PinDropOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3135",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PinDropOutlined {...props} />
  }
);