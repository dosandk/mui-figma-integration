
import figma from "@figma/code-connect";
import {AddOutlined} from "@mui/icons-material";

figma.connect(
  AddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:65638",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddOutlined {...props} />
  }
);