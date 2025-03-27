
import figma from "@figma/code-connect";
import {HorizontalRuleOutlined} from "@mui/icons-material";

figma.connect(
  HorizontalRuleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12638",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HorizontalRuleOutlined {...props} />
  }
);