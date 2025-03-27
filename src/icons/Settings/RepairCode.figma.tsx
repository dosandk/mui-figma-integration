
import figma from "@figma/code-connect";
import {RepairCode} from "@mui/icons-material";

figma.connect(
  RepairCode, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13089",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RepairCode {...props} />
  }
);