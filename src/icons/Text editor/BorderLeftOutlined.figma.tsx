
import figma from "@figma/code-connect";
import {BorderLeftOutlined} from "@mui/icons-material";

figma.connect(
  BorderLeftOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3222",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderLeftOutlined {...props} />
  }
);