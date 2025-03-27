
import figma from "@figma/code-connect";
import {NotificationsOffOutlined} from "@mui/icons-material";

figma.connect(
  NotificationsOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866931",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NotificationsOffOutlined {...props} />
  }
);