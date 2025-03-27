
import figma from "@figma/code-connect";
import {ThumbUpOutlined} from "@mui/icons-material";

figma.connect(
  ThumbUpOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3741",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ThumbUpOutlined {...props} />
  }
);