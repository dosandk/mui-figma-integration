
import figma from "@figma/code-connect";
import {HomeOutlined} from "@mui/icons-material";

figma.connect(
  HomeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112394",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HomeOutlined {...props} />
  }
);