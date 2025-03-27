
import figma from "@figma/code-connect";
import {AttachmentOutlined} from "@mui/icons-material";

figma.connect(
  AttachmentOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3731",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AttachmentOutlined {...props} />
  }
);