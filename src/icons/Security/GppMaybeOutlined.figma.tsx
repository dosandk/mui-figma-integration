
import figma from "@figma/code-connect";
import {GppMaybeOutlined} from "@mui/icons-material";

figma.connect(
  GppMaybeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3410",
  { 
    props: {
    
    },
    example: ({ ...props }) => <GppMaybeOutlined {...props} />
  }
);