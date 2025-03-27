
import figma from "@figma/code-connect";
import {FactCheckOutlined} from "@mui/icons-material";

figma.connect(
  FactCheckOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12391",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FactCheckOutlined {...props} />
  }
);