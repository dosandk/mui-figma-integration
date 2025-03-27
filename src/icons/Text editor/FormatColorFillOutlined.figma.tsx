
import figma from "@figma/code-connect";
import {FormatColorFillOutlined} from "@mui/icons-material";

figma.connect(
  FormatColorFillOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3188",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatColorFillOutlined {...props} />
  }
);