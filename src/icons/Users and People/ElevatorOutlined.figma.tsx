
import figma from "@figma/code-connect";
import {ElevatorOutlined} from "@mui/icons-material";

figma.connect(
  ElevatorOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867023",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ElevatorOutlined {...props} />
  }
);