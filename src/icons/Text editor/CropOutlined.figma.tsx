
import figma from "@figma/code-connect";
import {CropOutlined} from "@mui/icons-material";

figma.connect(
  CropOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3214",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CropOutlined {...props} />
  }
);