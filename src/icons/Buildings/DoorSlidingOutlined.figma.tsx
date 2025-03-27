
import figma from "@figma/code-connect";
import {DoorSlidingOutlined} from "@mui/icons-material";

figma.connect(
  DoorSlidingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3829",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DoorSlidingOutlined {...props} />
  }
);