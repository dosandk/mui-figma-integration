
import figma from "@figma/code-connect";
import {StarRateOutlined} from "@mui/icons-material";

figma.connect(
  StarRateOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:49651",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StarRateOutlined {...props} />
  }
);