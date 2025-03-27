
import figma from "@figma/code-connect";
import {WatchOutlined} from "@mui/icons-material";

figma.connect(
  WatchOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866941",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WatchOutlined {...props} />
  }
);