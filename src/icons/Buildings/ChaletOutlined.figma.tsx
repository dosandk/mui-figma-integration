
import figma from "@figma/code-connect";
import {ChaletOutlined} from "@mui/icons-material";

figma.connect(
  ChaletOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3815",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ChaletOutlined {...props} />
  }
);