
import figma from "@figma/code-connect";
import {CreditScoreOutlined} from "@mui/icons-material";

figma.connect(
  CreditScoreOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866966",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CreditScoreOutlined {...props} />
  }
);