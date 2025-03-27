
import figma from "@figma/code-connect";
import {InboxOutlined} from "@mui/icons-material";

figma.connect(
  InboxOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112414",
  { 
    props: {
    
    },
    example: ({ ...props }) => <InboxOutlined {...props} />
  }
);