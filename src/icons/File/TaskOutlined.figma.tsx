
import figma from "@figma/code-connect";
import {TaskOutlined} from "@mui/icons-material";

figma.connect(
  TaskOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12970",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TaskOutlined {...props} />
  }
);