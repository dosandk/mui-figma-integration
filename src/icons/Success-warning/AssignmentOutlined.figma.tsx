
import figma from "@figma/code-connect";
import {AssignmentOutlined} from "@mui/icons-material";

figma.connect(
  AssignmentOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12371",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AssignmentOutlined {...props} />
  }
);