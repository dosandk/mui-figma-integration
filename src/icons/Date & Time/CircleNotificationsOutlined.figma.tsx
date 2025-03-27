
import figma from "@figma/code-connect";
import {CircleNotificationsOutlined} from "@mui/icons-material";

figma.connect(
  CircleNotificationsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866912",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CircleNotificationsOutlined {...props} />
  }
);