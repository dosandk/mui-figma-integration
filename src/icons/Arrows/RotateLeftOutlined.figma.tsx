
import figma from "@figma/code-connect";
import {RotateLeftOutlined} from "@mui/icons-material";

figma.connect(
  RotateLeftOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11502",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RotateLeftOutlined {...props} />
  }
);