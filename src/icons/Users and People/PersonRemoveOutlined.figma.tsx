
import figma from "@figma/code-connect";
import {PersonRemoveOutlined} from "@mui/icons-material";

figma.connect(
  PersonRemoveOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11721",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PersonRemoveOutlined {...props} />
  }
);