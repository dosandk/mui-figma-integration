
import figma from "@figma/code-connect";
import {AttachFileOutlined} from "@mui/icons-material";

figma.connect(
  AttachFileOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3730",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AttachFileOutlined {...props} />
  }
);