
import figma from "@figma/code-connect";
import {PriorityHighOutlined} from "@mui/icons-material";

figma.connect(
  PriorityHighOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12461",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PriorityHighOutlined {...props} />
  }
);