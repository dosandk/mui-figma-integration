
import figma from "@figma/code-connect";
import {HikingOutlined} from "@mui/icons-material";

figma.connect(
  HikingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867027",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HikingOutlined {...props} />
  }
);