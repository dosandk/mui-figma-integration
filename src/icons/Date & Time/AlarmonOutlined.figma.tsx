
import figma from "@figma/code-connect";
import {AlarmonOutlined} from "@mui/icons-material";

figma.connect(
  AlarmonOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866932",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AlarmonOutlined {...props} />
  }
);