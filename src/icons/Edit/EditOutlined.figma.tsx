
import figma from "@figma/code-connect";
import {EditOutlined} from "@mui/icons-material";

figma.connect(
  EditOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:58506",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EditOutlined {...props} />
  }
);