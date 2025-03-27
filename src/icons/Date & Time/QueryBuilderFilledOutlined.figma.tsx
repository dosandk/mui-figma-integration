
import figma from "@figma/code-connect";
import {QueryBuilderFilledOutlined} from "@mui/icons-material";

figma.connect(
  QueryBuilderFilledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:72599",
  { 
    props: {
    
    },
    example: ({ ...props }) => <QueryBuilderFilledOutlined {...props} />
  }
);