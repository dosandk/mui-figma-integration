
import figma from "@figma/code-connect";
import {RepairParts} from "@mui/icons-material";

figma.connect(
  RepairParts, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13093",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RepairParts {...props} />
  }
);