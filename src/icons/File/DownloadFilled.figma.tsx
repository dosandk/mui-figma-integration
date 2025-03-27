
import figma from "@figma/code-connect";
import {DownloadFilled} from "@mui/icons-material";

figma.connect(
  DownloadFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112422",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DownloadFilled {...props} />
  }
);