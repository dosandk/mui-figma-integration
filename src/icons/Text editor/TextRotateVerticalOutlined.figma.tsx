
import figma from "@figma/code-connect";
import {TextRotateVerticalOutlined} from "@mui/icons-material";

figma.connect(
  TextRotateVerticalOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3191",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TextRotateVerticalOutlined {...props} />
  }
);