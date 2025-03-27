
import figma from "@figma/code-connect";
import {NotificationsPausedOutlined} from "@mui/icons-material";

figma.connect(
  NotificationsPausedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866938",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NotificationsPausedOutlined {...props} />
  }
);