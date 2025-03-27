
import figma from "@figma/code-connect";
import {DeleteOutlined} from "@mui/icons-material";

figma.connect(
  DeleteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112393",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DeleteOutlined {...props} />
  }
);