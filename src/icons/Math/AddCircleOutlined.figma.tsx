
import figma from "@figma/code-connect";
import {AddCircleOutlined} from "@mui/icons-material";

figma.connect(
  AddCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12602",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddCircleOutlined {...props} />
  }
);