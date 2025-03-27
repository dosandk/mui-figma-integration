
import figma from "@figma/code-connect";
import {BrokenImageOutlined} from "@mui/icons-material";

figma.connect(
  BrokenImageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3786",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BrokenImageOutlined {...props} />
  }
);