
import figma from "@figma/code-connect";
import {NotificationImportantOutlined} from "@mui/icons-material";

figma.connect(
  NotificationImportantOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866911",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NotificationImportantOutlined {...props} />
  }
);