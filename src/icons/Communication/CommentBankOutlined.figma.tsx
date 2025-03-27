
import figma from "@figma/code-connect";
import {CommentBankOutlined} from "@mui/icons-material";

figma.connect(
  CommentBankOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3059",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CommentBankOutlined {...props} />
  }
);