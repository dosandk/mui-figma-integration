
import figma from "@figma/code-connect";
import {DoorFrontOutlined} from "@mui/icons-material";

figma.connect(
  DoorFrontOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3828",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DoorFrontOutlined {...props} />
  }
);