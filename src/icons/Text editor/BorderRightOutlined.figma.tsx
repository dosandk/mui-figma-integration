
import figma from "@figma/code-connect";
import {BorderRightOutlined} from "@mui/icons-material";

figma.connect(
  BorderRightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3228",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderRightOutlined {...props} />
  }
);