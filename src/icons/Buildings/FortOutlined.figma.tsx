
import figma from "@figma/code-connect";
import {FortOutlined} from "@mui/icons-material";

figma.connect(
  FortOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3831",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FortOutlined {...props} />
  }
);