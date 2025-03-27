
import figma from "@figma/code-connect";
import {StarsOutlined} from "@mui/icons-material";

figma.connect(
  StarsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3739",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StarsOutlined {...props} />
  }
);