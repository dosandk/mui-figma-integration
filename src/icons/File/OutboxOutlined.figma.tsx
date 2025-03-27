
import figma from "@figma/code-connect";
import {OutboxOutlined} from "@mui/icons-material";

figma.connect(
  OutboxOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3575",
  { 
    props: {
    
    },
    example: ({ ...props }) => <OutboxOutlined {...props} />
  }
);