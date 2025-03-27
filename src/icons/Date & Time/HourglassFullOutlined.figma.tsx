
import figma from "@figma/code-connect";
import {HourglassFullOutlined} from "@mui/icons-material";

figma.connect(
  HourglassFullOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866924",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HourglassFullOutlined {...props} />
  }
);