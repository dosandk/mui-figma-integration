
import figma from "@figma/code-connect";
import {AddLinkOutlined} from "@mui/icons-material";

figma.connect(
  AddLinkOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12577",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddLinkOutlined {...props} />
  }
);