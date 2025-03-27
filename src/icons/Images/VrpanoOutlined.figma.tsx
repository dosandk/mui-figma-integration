
import figma from "@figma/code-connect";
import {VrpanoOutlined} from "@mui/icons-material";

figma.connect(
  VrpanoOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3785",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VrpanoOutlined {...props} />
  }
);