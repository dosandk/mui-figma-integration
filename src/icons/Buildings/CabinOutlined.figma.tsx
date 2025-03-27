
import figma from "@figma/code-connect";
import {CabinOutlined} from "@mui/icons-material";

figma.connect(
  CabinOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3823",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CabinOutlined {...props} />
  }
);