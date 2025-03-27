
import figma from "@figma/code-connect";
import {RampLeftOutlined} from "@mui/icons-material";

figma.connect(
  RampLeftOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11353",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RampLeftOutlined {...props} />
  }
);