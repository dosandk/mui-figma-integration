
import figma from "@figma/code-connect";
import {CottageOutlined} from "@mui/icons-material";

figma.connect(
  CottageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3820",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CottageOutlined {...props} />
  }
);