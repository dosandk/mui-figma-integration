
import figma from "@figma/code-connect";
import {SpeakerNotesOffOutlined} from "@mui/icons-material";

figma.connect(
  SpeakerNotesOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3031",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SpeakerNotesOffOutlined {...props} />
  }
);