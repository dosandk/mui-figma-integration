
import figma from "@figma/code-connect";
import {BorderInnerOutlined} from "@mui/icons-material";

figma.connect(
  BorderInnerOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3221",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderInnerOutlined {...props} />
  }
);