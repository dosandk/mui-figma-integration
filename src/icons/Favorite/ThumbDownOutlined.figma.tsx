
import figma from "@figma/code-connect";
import {ThumbDownOutlined} from "@mui/icons-material";

figma.connect(
  ThumbDownOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3740",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ThumbDownOutlined {...props} />
  }
);