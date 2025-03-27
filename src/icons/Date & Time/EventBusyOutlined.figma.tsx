
import figma from "@figma/code-connect";
import {EventBusyOutlined} from "@mui/icons-material";

figma.connect(
  EventBusyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866925",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EventBusyOutlined {...props} />
  }
);