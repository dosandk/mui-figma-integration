
import figma from "@figma/code-connect";
import {FormatLineSpacingOutlined} from "@mui/icons-material";

figma.connect(
  FormatLineSpacingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3195",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatLineSpacingOutlined {...props} />
  }
);