
import figma from "@figma/code-connect";
import {IosShareOutlined} from "@mui/icons-material";

figma.connect(
  IosShareOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3476",
  { 
    props: {
    
    },
    example: ({ ...props }) => <IosShareOutlined {...props} />
  }
);