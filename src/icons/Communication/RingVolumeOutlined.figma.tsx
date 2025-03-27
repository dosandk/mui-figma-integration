
import figma from "@figma/code-connect";
import {RingVolumeOutlined} from "@mui/icons-material";

figma.connect(
  RingVolumeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3041",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RingVolumeOutlined {...props} />
  }
);