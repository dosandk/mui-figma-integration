
import figma from "@figma/code-connect";
import {FormatClearOutlined} from "@mui/icons-material";

figma.connect(
  FormatClearOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3185",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatClearOutlined {...props} />
  }
);