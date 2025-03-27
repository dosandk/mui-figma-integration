
import figma from "@figma/code-connect";
import {BorderTopOutlined} from "@mui/icons-material";

figma.connect(
  BorderTopOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3230",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderTopOutlined {...props} />
  }
);