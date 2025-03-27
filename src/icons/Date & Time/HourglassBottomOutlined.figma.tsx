
import figma from "@figma/code-connect";
import {HourglassBottomOutlined} from "@mui/icons-material";

figma.connect(
  HourglassBottomOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866922",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HourglassBottomOutlined {...props} />
  }
);