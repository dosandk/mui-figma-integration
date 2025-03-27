
import figma from "@figma/code-connect";
import {CommentsDisabledOutlined} from "@mui/icons-material";

figma.connect(
  CommentsDisabledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3075",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CommentsDisabledOutlined {...props} />
  }
);