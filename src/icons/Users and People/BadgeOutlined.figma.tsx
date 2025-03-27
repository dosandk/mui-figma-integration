
import figma from "@figma/code-connect";
import {BadgeOutlined} from "@mui/icons-material";

figma.connect(
  BadgeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867076",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BadgeOutlined {...props} />
  }
);