
import figma from "@figma/code-connect";
import {BorderColorOutlined} from "@mui/icons-material";

figma.connect(
  BorderColorOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12539",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderColorOutlined {...props} />
  }
);