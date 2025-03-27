
import figma from "@figma/code-connect";
import {TurnLeftOutlined} from "@mui/icons-material";

figma.connect(
  TurnLeftOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11371",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TurnLeftOutlined {...props} />
  }
);