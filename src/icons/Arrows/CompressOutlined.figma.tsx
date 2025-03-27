
import figma from "@figma/code-connect";
import {CompressOutlined} from "@mui/icons-material";

figma.connect(
  CompressOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11330",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CompressOutlined {...props} />
  }
);