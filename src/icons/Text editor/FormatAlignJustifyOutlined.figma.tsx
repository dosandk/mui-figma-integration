
import figma from "@figma/code-connect";
import {FormatAlignJustifyOutlined} from "@mui/icons-material";

figma.connect(
  FormatAlignJustifyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3200",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatAlignJustifyOutlined {...props} />
  }
);