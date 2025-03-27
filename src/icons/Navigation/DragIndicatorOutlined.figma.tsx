
import figma from "@figma/code-connect";
import {DragIndicatorOutlined} from "@mui/icons-material";

figma.connect(
  DragIndicatorOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=317:91952",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DragIndicatorOutlined {...props} />
  }
);