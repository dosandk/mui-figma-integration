
import figma from "@figma/code-connect";
import {MobiledataOffOutlined} from "@mui/icons-material";

figma.connect(
  MobiledataOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11342",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MobiledataOffOutlined {...props} />
  }
);