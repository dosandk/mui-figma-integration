
import figma from "@figma/code-connect";
import {AddLocationAltOutlined} from "@mui/icons-material";

figma.connect(
  AddLocationAltOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12171",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddLocationAltOutlined {...props} />
  }
);