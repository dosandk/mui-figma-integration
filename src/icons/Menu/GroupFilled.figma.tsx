
import figma from "@figma/code-connect";
import {GroupFilled} from "@mui/icons-material";

figma.connect(
  GroupFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13230",
  { 
    props: {
    
    },
    example: ({ ...props }) => <GroupFilled {...props} />
  }
);