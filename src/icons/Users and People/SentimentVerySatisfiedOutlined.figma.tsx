
import figma from "@figma/code-connect";
import {SentimentVerySatisfiedOutlined} from "@mui/icons-material";

figma.connect(
  SentimentVerySatisfiedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867054",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SentimentVerySatisfiedOutlined {...props} />
  }
);