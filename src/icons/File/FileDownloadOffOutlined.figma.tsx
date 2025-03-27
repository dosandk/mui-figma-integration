
import figma from "@figma/code-connect";
import {FileDownloadOffOutlined} from "@mui/icons-material";

figma.connect(
  FileDownloadOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3591",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FileDownloadOffOutlined {...props} />
  }
);