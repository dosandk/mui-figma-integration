
import figma from "@figma/code-connect";
import {SearchOffOutlined} from "@mui/icons-material";

figma.connect(
  SearchOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3702",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SearchOffOutlined {...props} />
  }
);