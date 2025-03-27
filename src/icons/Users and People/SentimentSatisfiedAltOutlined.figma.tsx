
import figma from "@figma/code-connect";
import {SentimentSatisfiedAltOutlined} from "@mui/icons-material";

figma.connect(
  SentimentSatisfiedAltOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867061",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SentimentSatisfiedAltOutlined {...props} />
  }
);