
import figma from "@figma/code-connect";
import {SentimentNeutralOutlined} from "@mui/icons-material";

figma.connect(
  SentimentNeutralOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867022",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SentimentNeutralOutlined {...props} />
  }
);