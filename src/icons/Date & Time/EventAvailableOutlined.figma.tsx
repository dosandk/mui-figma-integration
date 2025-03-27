
import figma from "@figma/code-connect";
import {EventAvailableOutlined} from "@mui/icons-material";

figma.connect(
  EventAvailableOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11091",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EventAvailableOutlined {...props} />
  }
);