
import figma from "@figma/code-connect";
import {TaskAltOutlined} from "@mui/icons-material";

figma.connect(
  TaskAltOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12443",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TaskAltOutlined {...props} />
  }
);