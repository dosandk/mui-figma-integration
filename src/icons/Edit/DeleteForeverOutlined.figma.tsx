
import figma from "@figma/code-connect";
import {DeleteForeverOutlined} from "@mui/icons-material";

figma.connect(
  DeleteForeverOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12561",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DeleteForeverOutlined {...props} />
  }
);