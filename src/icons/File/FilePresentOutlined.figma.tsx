
import figma from "@figma/code-connect";
import {FilePresentOutlined} from "@mui/icons-material";

figma.connect(
  FilePresentOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12852",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FilePresentOutlined {...props} />
  }
);