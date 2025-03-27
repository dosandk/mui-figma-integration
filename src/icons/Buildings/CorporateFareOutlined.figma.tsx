
import figma from "@figma/code-connect";
import {CorporateFareOutlined} from "@mui/icons-material";

figma.connect(
  CorporateFareOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3835",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CorporateFareOutlined {...props} />
  }
);