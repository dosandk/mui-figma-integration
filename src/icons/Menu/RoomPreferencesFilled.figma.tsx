
import figma from "@figma/code-connect";
import {RoomPreferencesFilled} from "@mui/icons-material";

figma.connect(
  RoomPreferencesFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13166",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RoomPreferencesFilled {...props} />
  }
);