
import figma from "@figma/code-connect";
import {LocalAtmOutlined} from "@mui/icons-material";

figma.connect(
  LocalAtmOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866975",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocalAtmOutlined {...props} />
  }
);