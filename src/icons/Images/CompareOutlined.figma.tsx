
import figma from "@figma/code-connect";
import {CompareOutlined} from "@mui/icons-material";

figma.connect(
  CompareOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3784",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CompareOutlined {...props} />
  }
);