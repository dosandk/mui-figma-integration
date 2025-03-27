
import figma from "@figma/code-connect";
import {AddCircleOutlineOutlined} from "@mui/icons-material";

figma.connect(
  AddCircleOutlineOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12604",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddCircleOutlineOutlined {...props} />
  }
);