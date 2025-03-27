
import figma from "@figma/code-connect";
import {HardwareOutlined} from "@mui/icons-material";

figma.connect(
  HardwareOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13081",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HardwareOutlined {...props} />
  }
);