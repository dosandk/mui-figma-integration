
import figma from "@figma/code-connect";
import {NotificationsOutlined} from "@mui/icons-material";

figma.connect(
  NotificationsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:50551",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NotificationsOutlined {...props} />
  }
);