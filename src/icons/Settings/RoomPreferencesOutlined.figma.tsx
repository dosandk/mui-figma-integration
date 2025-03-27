
import figma from "@figma/code-connect";
import {RoomPreferencesOutlined} from "@mui/icons-material";

figma.connect(
  RoomPreferencesOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13048",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RoomPreferencesOutlined {...props} />
  }
);