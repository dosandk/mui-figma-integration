
import figma from "@figma/code-connect";
import {RotateRightOutlined} from "@mui/icons-material";

figma.connect(
  RotateRightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11500",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RotateRightOutlined {...props} />
  }
);