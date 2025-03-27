
import figma from "@figma/code-connect";
import {EventOutlined} from "@mui/icons-material";

figma.connect(
  EventOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=1251:808069",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EventOutlined {...props} />
  }
);