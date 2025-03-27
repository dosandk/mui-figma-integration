
import figma from "@figma/code-connect";
import {DownloadOutlined} from "@mui/icons-material";

figma.connect(
  DownloadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11576",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DownloadOutlined {...props} />
  }
);