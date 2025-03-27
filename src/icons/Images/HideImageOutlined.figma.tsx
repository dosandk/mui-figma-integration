
import figma from "@figma/code-connect";
import {HideImageOutlined} from "@mui/icons-material";

figma.connect(
  HideImageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3788",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HideImageOutlined {...props} />
  }
);