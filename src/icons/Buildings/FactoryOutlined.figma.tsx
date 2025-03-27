
import figma from "@figma/code-connect";
import {FactoryOutlined} from "@mui/icons-material";

figma.connect(
  FactoryOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3832",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FactoryOutlined {...props} />
  }
);