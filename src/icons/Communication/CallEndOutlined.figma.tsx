
import figma from "@figma/code-connect";
import {CallEndOutlined} from "@mui/icons-material";

figma.connect(
  CallEndOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3043",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CallEndOutlined {...props} />
  }
);