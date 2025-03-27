
import figma from "@figma/code-connect";
import {SentimentDissatisfiedOutlined} from "@mui/icons-material";

figma.connect(
  SentimentDissatisfiedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867037",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SentimentDissatisfiedOutlined {...props} />
  }
);