
import figma from "@figma/code-connect";
import {UploadOutlined} from "@mui/icons-material";

figma.connect(
  UploadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11574",
  { 
    props: {
    
    },
    example: ({ ...props }) => <UploadOutlined {...props} />
  }
);