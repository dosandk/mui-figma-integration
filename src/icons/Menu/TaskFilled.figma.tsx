
import figma from "@figma/code-connect";
import {TaskFilled} from "@mui/icons-material";

figma.connect(
  TaskFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13216",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TaskFilled {...props} />
  }
);