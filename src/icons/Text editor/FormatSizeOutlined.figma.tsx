
import figma from "@figma/code-connect";
import {FormatSizeOutlined} from "@mui/icons-material";

figma.connect(
  FormatSizeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3209",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatSizeOutlined {...props} />
  }
);