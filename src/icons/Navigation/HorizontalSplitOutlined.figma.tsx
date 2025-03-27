
import figma from "@figma/code-connect";
import {HorizontalSplitOutlined} from "@mui/icons-material";

figma.connect(
  HorizontalSplitOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3473",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HorizontalSplitOutlined {...props} />
  }
);