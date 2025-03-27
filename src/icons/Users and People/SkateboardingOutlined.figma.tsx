
import figma from "@figma/code-connect";
import {SkateboardingOutlined} from "@mui/icons-material";

figma.connect(
  SkateboardingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867015",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SkateboardingOutlined {...props} />
  }
);