
import figma from "@figma/code-connect";
import {LinkOutlined} from "@mui/icons-material";

figma.connect(
  LinkOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12565",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LinkOutlined {...props} />
  }
);