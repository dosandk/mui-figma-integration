
import figma from "@figma/code-connect";
import {EventNoteOutlined} from "@mui/icons-material";

figma.connect(
  EventNoteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866926",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EventNoteOutlined {...props} />
  }
);