
import figma from "@figma/code-connect";
import {TimerOffOutlined} from "@mui/icons-material";

figma.connect(
  TimerOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866909",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TimerOffOutlined {...props} />
  }
);