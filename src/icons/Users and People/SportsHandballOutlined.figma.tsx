
import figma from "@figma/code-connect";
import {SportsHandballOutlined} from "@mui/icons-material";

figma.connect(
  SportsHandballOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867014",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SportsHandballOutlined {...props} />
  }
);