
import figma from "@figma/code-connect";
import {ImageSearchOutlined} from "@mui/icons-material";

figma.connect(
  ImageSearchOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3787",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ImageSearchOutlined {...props} />
  }
);