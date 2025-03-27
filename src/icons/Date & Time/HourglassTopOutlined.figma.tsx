
import figma from "@figma/code-connect";
import {HourglassTopOutlined} from "@mui/icons-material";

figma.connect(
  HourglassTopOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866920",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HourglassTopOutlined {...props} />
  }
);