
import figma from "@figma/code-connect";
import {FormatListNumberedOutlined} from "@mui/icons-material";

figma.connect(
  FormatListNumberedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3197",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatListNumberedOutlined {...props} />
  }
);