
import figma from "@figma/code-connect";
import {FullscreenExitOutlined} from "@mui/icons-material";

figma.connect(
  FullscreenExitOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3468",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FullscreenExitOutlined {...props} />
  }
);