
import figma from "@figma/code-connect";
import {FileDownloadOutlined} from "@mui/icons-material";

figma.connect(
  FileDownloadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112408",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FileDownloadOutlined {...props} />
  }
);