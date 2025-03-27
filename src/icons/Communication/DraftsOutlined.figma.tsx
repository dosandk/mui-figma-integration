
import figma from "@figma/code-connect";
import {DraftsOutlined} from "@mui/icons-material";

figma.connect(
  DraftsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112433",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DraftsOutlined {...props} />
  }
);