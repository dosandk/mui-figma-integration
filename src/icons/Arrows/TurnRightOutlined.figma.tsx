
import figma from "@figma/code-connect";
import {TurnRightOutlined} from "@mui/icons-material";

figma.connect(
  TurnRightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11368",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TurnRightOutlined {...props} />
  }
);