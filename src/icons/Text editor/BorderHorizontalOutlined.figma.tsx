
import figma from "@figma/code-connect";
import {BorderHorizontalOutlined} from "@mui/icons-material";

figma.connect(
  BorderHorizontalOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3219",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderHorizontalOutlined {...props} />
  }
);