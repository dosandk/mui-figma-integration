
import figma from "@figma/code-connect";
import {BusinessOutlined} from "@mui/icons-material";

figma.connect(
  BusinessOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3837",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BusinessOutlined {...props} />
  }
);