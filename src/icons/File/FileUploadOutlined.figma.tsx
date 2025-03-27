
import figma from "@figma/code-connect";
import {FileUploadOutlined} from "@mui/icons-material";

figma.connect(
  FileUploadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3573",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FileUploadOutlined {...props} />
  }
);