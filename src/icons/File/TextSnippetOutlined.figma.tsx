
import figma from "@figma/code-connect";
import {TextSnippetOutlined} from "@mui/icons-material";

figma.connect(
  TextSnippetOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3579",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TextSnippetOutlined {...props} />
  }
);