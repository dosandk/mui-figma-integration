
import figma from "@figma/code-connect";
import {MarkunreadMailboxOutlined} from "@mui/icons-material";

figma.connect(
  MarkunreadMailboxOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3058",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MarkunreadMailboxOutlined {...props} />
  }
);