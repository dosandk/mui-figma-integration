
import figma from "@figma/code-connect";
import {FoundationOutlined} from "@mui/icons-material";

figma.connect(
  FoundationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3812",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FoundationOutlined {...props} />
  }
);