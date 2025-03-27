
import figma from "@figma/code-connect";
import {PersonAddOutlined} from "@mui/icons-material";

figma.connect(
  PersonAddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:50722",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PersonAddOutlined {...props} />
  }
);