
import figma from "@figma/code-connect";
import {SocialDistanceOutlined} from "@mui/icons-material";

figma.connect(
  SocialDistanceOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867031",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SocialDistanceOutlined {...props} />
  }
);