
import figma from "@figma/code-connect";
import {FilterNoneOutlined} from "@mui/icons-material";

figma.connect(
  FilterNoneOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3605",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FilterNoneOutlined {...props} />
  }
);