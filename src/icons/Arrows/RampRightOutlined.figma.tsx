
import figma from "@figma/code-connect";
import {RampRightOutlined} from "@mui/icons-material";

figma.connect(
  RampRightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11350",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RampRightOutlined {...props} />
  }
);