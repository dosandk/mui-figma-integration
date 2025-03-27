
import figma from "@figma/code-connect";
import {UpdateOutlined} from "@mui/icons-material";

figma.connect(
  UpdateOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11159",
  { 
    props: {
    
    },
    example: ({ ...props }) => <UpdateOutlined {...props} />
  }
);