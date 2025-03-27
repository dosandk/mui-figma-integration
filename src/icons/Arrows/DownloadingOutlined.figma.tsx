
import figma from "@figma/code-connect";
import {DownloadingOutlined} from "@mui/icons-material";

figma.connect(
  DownloadingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11430",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DownloadingOutlined {...props} />
  }
);