
import figma from "@figma/code-connect";
import {SensorWindowFilled} from "@mui/icons-material";

figma.connect(
  SensorWindowFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13244",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SensorWindowFilled {...props} />
  }
);