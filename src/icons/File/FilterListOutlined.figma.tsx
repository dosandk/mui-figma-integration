
import figma from "@figma/code-connect";
import {FilterListOutlined} from "@mui/icons-material";

figma.connect(
  FilterListOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112406",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FilterListOutlined {...props} />
  }
);