
import figma from "@figma/code-connect";
import {SortOutlined} from "@mui/icons-material";

figma.connect(
  SortOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3576",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SortOutlined {...props} />
  }
);