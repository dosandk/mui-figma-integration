
import figma from "@figma/code-connect";
import {HourglassEmptyOutlined} from "@mui/icons-material";

figma.connect(
  HourglassEmptyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866918",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HourglassEmptyOutlined {...props} />
  }
);