
import figma from "@figma/code-connect";
import {FilterAltOffOutlined} from "@mui/icons-material";

figma.connect(
  FilterAltOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3601",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FilterAltOffOutlined {...props} />
  }
);