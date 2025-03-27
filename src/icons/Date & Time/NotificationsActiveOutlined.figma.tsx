
import figma from "@figma/code-connect";
import {NotificationsActiveOutlined} from "@mui/icons-material";

figma.connect(
  NotificationsActiveOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866927",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NotificationsActiveOutlined {...props} />
  }
);