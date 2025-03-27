
import figma from "@figma/code-connect";
import {ListAltOutlined} from "@mui/icons-material";

figma.connect(
  ListAltOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12866",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ListAltOutlined {...props} />
  }
);