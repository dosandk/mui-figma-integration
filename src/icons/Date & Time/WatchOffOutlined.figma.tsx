
import figma from "@figma/code-connect";
import {WatchOffOutlined} from "@mui/icons-material";

figma.connect(
  WatchOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866939",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WatchOffOutlined {...props} />
  }
);