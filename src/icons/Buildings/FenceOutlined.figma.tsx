
import figma from "@figma/code-connect";
import {FenceOutlined} from "@mui/icons-material";

figma.connect(
  FenceOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3839",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FenceOutlined {...props} />
  }
);