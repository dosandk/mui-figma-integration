
import figma from "@figma/code-connect";
import {PersonSearchOutlined} from "@mui/icons-material";

figma.connect(
  PersonSearchOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11716",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PersonSearchOutlined {...props} />
  }
);