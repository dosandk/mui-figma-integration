
import figma from "@figma/code-connect";
import {PersonPinCircleOutlined} from "@mui/icons-material";

figma.connect(
  PersonPinCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3145",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PersonPinCircleOutlined {...props} />
  }
);