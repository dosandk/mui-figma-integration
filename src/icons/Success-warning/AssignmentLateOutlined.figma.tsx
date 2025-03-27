
import figma from "@figma/code-connect";
import {AssignmentLateOutlined} from "@mui/icons-material";

figma.connect(
  AssignmentLateOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12374",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AssignmentLateOutlined {...props} />
  }
);