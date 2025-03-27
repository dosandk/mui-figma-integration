
import figma from "@figma/code-connect";
import {AddLocationOutlined} from "@mui/icons-material";

figma.connect(
  AddLocationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12165",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddLocationOutlined {...props} />
  }
);