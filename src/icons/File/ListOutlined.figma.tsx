
import figma from "@figma/code-connect";
import {ListOutlined} from "@mui/icons-material";

figma.connect(
  ListOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3612",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ListOutlined {...props} />
  }
);