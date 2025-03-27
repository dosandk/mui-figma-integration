
import figma from "@figma/code-connect";
import {CoPresentOutlined} from "@mui/icons-material";

figma.connect(
  CoPresentOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867059",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CoPresentOutlined {...props} />
  }
);