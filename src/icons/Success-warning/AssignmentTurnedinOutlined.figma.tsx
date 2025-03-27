
import figma from "@figma/code-connect";
import {AssignmentTurnedinOutlined} from "@mui/icons-material";

figma.connect(
  AssignmentTurnedinOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12369",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AssignmentTurnedinOutlined {...props} />
  }
);