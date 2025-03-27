
import figma from "@figma/code-connect";
import {FileDownloadDoneOutlined} from "@mui/icons-material";

figma.connect(
  FileDownloadDoneOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12399",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FileDownloadDoneOutlined {...props} />
  }
);