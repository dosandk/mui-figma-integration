
import figma from "@figma/code-connect";
import {ImageOutlined} from "@mui/icons-material";

figma.connect(
  ImageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:59725",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ImageOutlined {...props} />
  }
);