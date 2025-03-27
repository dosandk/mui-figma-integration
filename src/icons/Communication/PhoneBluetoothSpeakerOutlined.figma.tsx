
import figma from "@figma/code-connect";
import {PhoneBluetoothSpeakerOutlined} from "@mui/icons-material";

figma.connect(
  PhoneBluetoothSpeakerOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3034",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhoneBluetoothSpeakerOutlined {...props} />
  }
);