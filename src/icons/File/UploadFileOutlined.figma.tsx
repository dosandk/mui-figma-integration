
import figma from "@figma/code-connect";
import {UploadFileOutlined} from "@mui/icons-material";

figma.connect(
  UploadFileOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9603:149058",
  { 
    props: {
    
    },
    example: ({ ...props }) => <UploadFileOutlined {...props} />
  }
);