
import figma from "@figma/code-connect";
import {RateReviewOutlined} from "@mui/icons-material";

figma.connect(
  RateReviewOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3053",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RateReviewOutlined {...props} />
  }
);