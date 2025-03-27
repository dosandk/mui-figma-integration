
import figma from "@figma/code-connect";
import {SendandArchiveOutlined} from "@mui/icons-material";

figma.connect(
  SendandArchiveOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3046",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SendandArchiveOutlined {...props} />
  }
);