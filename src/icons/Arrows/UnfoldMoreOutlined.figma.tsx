
import figma from "@figma/code-connect";
import {UnfoldMoreOutlined} from "@mui/icons-material";

figma.connect(
  UnfoldMoreOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11613:424603",
  { 
    props: {
    
    },
    example: ({ ...props }) => <UnfoldMoreOutlined {...props} />
  }
);