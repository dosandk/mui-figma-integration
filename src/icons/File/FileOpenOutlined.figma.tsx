
import figma from "@figma/code-connect";
import {FileOpenOutlined} from "@mui/icons-material";

figma.connect(
  FileOpenOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3598",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FileOpenOutlined {...props} />
  }
);