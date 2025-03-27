
import figma from "@figma/code-connect";
import {BorderVerticalOutlined} from "@mui/icons-material";

figma.connect(
  BorderVerticalOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3204",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderVerticalOutlined {...props} />
  }
);