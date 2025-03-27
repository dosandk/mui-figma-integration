
import figma from "@figma/code-connect";
import {SentimentVeryDissatisfiedOutlined} from "@mui/icons-material";

figma.connect(
  SentimentVeryDissatisfiedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867056",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SentimentVeryDissatisfiedOutlined {...props} />
  }
);