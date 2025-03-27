
import figma from "@figma/code-connect";
import {ManOutlined} from "@mui/icons-material";

figma.connect(
  ManOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867062",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ManOutlined {...props} />
  }
);