
import figma from "@figma/code-connect";
import {AvTimerOutlined} from "@mui/icons-material";

figma.connect(
  AvTimerOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866930",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AvTimerOutlined {...props} />
  }
);