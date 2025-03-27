
import figma from "@figma/code-connect";
import {InsertPageBreakOutlined} from "@mui/icons-material";

figma.connect(
  InsertPageBreakOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3602",
  { 
    props: {
    
    },
    example: ({ ...props }) => <InsertPageBreakOutlined {...props} />
  }
);