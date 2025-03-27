
import figma from "@figma/code-connect";
import {EditOffOutlined} from "@mui/icons-material";

figma.connect(
  EditOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12547",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EditOffOutlined {...props} />
  }
);