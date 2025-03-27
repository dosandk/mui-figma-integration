
import figma from "@figma/code-connect";
import {CropRotateOutlined} from "@mui/icons-material";

figma.connect(
  CropRotateOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3215",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CropRotateOutlined {...props} />
  }
);