
import figma from "@figma/code-connect";
import {EuroOutlined} from "@mui/icons-material";

figma.connect(
  EuroOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866968",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EuroOutlined {...props} />
  }
);