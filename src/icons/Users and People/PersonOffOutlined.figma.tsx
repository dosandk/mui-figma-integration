
import figma from "@figma/code-connect";
import {PersonOffOutlined} from "@mui/icons-material";

figma.connect(
  PersonOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11727",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PersonOffOutlined {...props} />
  }
);