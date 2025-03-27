
import figma from "@figma/code-connect";
import {MinimizeOutlined} from "@mui/icons-material";

figma.connect(
  MinimizeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3466",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MinimizeOutlined {...props} />
  }
);