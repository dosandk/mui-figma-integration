
import figma from "@figma/code-connect";
import {FormatPaintOutlined} from "@mui/icons-material";

figma.connect(
  FormatPaintOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3201",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatPaintOutlined {...props} />
  }
);