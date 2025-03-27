
import figma from "@figma/code-connect";
import {HourglassDisabledOutlined} from "@mui/icons-material";

figma.connect(
  HourglassDisabledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866916",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HourglassDisabledOutlined {...props} />
  }
);