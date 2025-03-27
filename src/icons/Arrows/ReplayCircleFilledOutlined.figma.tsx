
import figma from "@figma/code-connect";
import {ReplayCircleFilledOutlined} from "@mui/icons-material";

figma.connect(
  ReplayCircleFilledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11540",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReplayCircleFilledOutlined {...props} />
  }
);