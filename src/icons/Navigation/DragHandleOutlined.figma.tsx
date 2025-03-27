
import figma from "@figma/code-connect";
import {DragHandleOutlined} from "@mui/icons-material";

figma.connect(
  DragHandleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3480",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DragHandleOutlined {...props} />
  }
);