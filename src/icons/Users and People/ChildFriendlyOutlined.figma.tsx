
import figma from "@figma/code-connect";
import {ChildFriendlyOutlined} from "@mui/icons-material";

figma.connect(
  ChildFriendlyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867033",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ChildFriendlyOutlined {...props} />
  }
);