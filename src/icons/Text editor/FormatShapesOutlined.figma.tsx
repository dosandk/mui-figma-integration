
import figma from "@figma/code-connect";
import {FormatShapesOutlined} from "@mui/icons-material";

figma.connect(
  FormatShapesOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3206",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatShapesOutlined {...props} />
  }
);