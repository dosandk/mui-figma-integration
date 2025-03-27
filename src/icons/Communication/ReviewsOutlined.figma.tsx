
import figma from "@figma/code-connect";
import {ReviewsOutlined} from "@mui/icons-material";

figma.connect(
  ReviewsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12068",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReviewsOutlined {...props} />
  }
);