
import figma from "@figma/code-connect";
import {AddReactionOutlined} from "@mui/icons-material";

figma.connect(
  AddReactionOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867065",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddReactionOutlined {...props} />
  }
);