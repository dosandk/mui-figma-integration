
import figma from "@figma/code-connect";
import {TempleBuddhistOutlined} from "@mui/icons-material";

figma.connect(
  TempleBuddhistOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3819",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TempleBuddhistOutlined {...props} />
  }
);