
import figma from "@figma/code-connect";
import {FormatBoldOutlined} from "@mui/icons-material";

figma.connect(
  FormatBoldOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3182",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatBoldOutlined {...props} />
  }
);