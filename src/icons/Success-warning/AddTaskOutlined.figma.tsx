
import figma from "@figma/code-connect";
import {AddTaskOutlined} from "@mui/icons-material";

figma.connect(
  AddTaskOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12428",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddTaskOutlined {...props} />
  }
);