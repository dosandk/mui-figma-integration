
import figma from "@figma/code-connect";
import {FilterAltOutlined} from "@mui/icons-material";

figma.connect(
  FilterAltOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=293:93149",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FilterAltOutlined {...props} />
  }
);