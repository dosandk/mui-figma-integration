
import figma from "@figma/code-connect";
import {FormatStrikethroughOutlined} from "@mui/icons-material";

figma.connect(
  FormatStrikethroughOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3210",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatStrikethroughOutlined {...props} />
  }
);