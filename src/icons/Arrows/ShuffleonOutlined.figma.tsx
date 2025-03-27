
import figma from "@figma/code-connect";
import {ShuffleonOutlined} from "@mui/icons-material";

figma.connect(
  ShuffleonOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11358",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShuffleonOutlined {...props} />
  }
);