
import figma from "@figma/code-connect";
import {AutoDeleteOutlined} from "@mui/icons-material";

figma.connect(
  AutoDeleteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12551",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AutoDeleteOutlined {...props} />
  }
);