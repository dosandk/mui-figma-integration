
import figma from "@figma/code-connect";
import {PunchClockOutlined} from "@mui/icons-material";

figma.connect(
  PunchClockOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866907",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PunchClockOutlined {...props} />
  }
);