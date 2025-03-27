
import figma from "@figma/code-connect";
import {FilterListOffOutlined} from "@mui/icons-material";

figma.connect(
  FilterListOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3596",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FilterListOffOutlined {...props} />
  }
);