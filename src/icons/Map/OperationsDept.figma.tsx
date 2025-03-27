
import figma from "@figma/code-connect";
import {OperationsDept} from "@mui/icons-material";

figma.connect(
  OperationsDept, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12250",
  { 
    props: {
    
    },
    example: ({ ...props }) => <OperationsDept {...props} />
  }
);