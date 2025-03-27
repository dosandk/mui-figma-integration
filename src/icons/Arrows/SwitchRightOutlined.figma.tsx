
import figma from "@figma/code-connect";
import {SwitchRightOutlined} from "@mui/icons-material";

figma.connect(
  SwitchRightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11393",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwitchRightOutlined {...props} />
  }
);