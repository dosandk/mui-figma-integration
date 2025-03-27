
import figma from "@figma/code-connect";
import {SnowboardingOutlined} from "@mui/icons-material";

figma.connect(
  SnowboardingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867063",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SnowboardingOutlined {...props} />
  }
);