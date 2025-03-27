
import figma from "@figma/code-connect";
import {TimerOutlined} from "@mui/icons-material";

figma.connect(
  TimerOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866929",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TimerOutlined {...props} />
  }
);