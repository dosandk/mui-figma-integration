
import figma from "@figma/code-connect";
import {SpeakerNotesOutlined} from "@mui/icons-material";

figma.connect(
  SpeakerNotesOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3047",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SpeakerNotesOutlined {...props} />
  }
);