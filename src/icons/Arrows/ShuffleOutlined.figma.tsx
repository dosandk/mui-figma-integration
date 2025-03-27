
import figma from "@figma/code-connect";
import {ShuffleOutlined} from "@mui/icons-material";

figma.connect(
  ShuffleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11356",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShuffleOutlined {...props} />
  }
);