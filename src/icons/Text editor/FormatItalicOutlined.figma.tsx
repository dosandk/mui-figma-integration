
import figma from "@figma/code-connect";
import {FormatItalicOutlined} from "@mui/icons-material";

figma.connect(
  FormatItalicOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3193",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatItalicOutlined {...props} />
  }
);