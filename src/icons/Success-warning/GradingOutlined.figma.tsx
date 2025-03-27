
import figma from "@figma/code-connect";
import {GradingOutlined} from "@mui/icons-material";

figma.connect(
  GradingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12454",
  { 
    props: {
    
    },
    example: ({ ...props }) => <GradingOutlined {...props} />
  }
);