
import figma from "@figma/code-connect";
import {GroupWorkFilled} from "@mui/icons-material";

figma.connect(
  GroupWorkFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13260",
  { 
    props: {
    
    },
    example: ({ ...props }) => <GroupWorkFilled {...props} />
  }
);