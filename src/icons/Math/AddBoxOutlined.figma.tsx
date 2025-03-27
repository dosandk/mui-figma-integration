
import figma from "@figma/code-connect";
import {AddBoxOutlined} from "@mui/icons-material";

figma.connect(
  AddBoxOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12606",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddBoxOutlined {...props} />
  }
);