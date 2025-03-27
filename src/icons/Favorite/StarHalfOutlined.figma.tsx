
import figma from "@figma/code-connect";
import {StarHalfOutlined} from "@mui/icons-material";

figma.connect(
  StarHalfOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:49640",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StarHalfOutlined {...props} />
  }
);