
import figma from "@figma/code-connect";
import {NotificationAddOutlined} from "@mui/icons-material";

figma.connect(
  NotificationAddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866910",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NotificationAddOutlined {...props} />
  }
);