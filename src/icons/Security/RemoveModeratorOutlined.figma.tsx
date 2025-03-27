
import figma from "@figma/code-connect";
import {RemoveModeratorOutlined} from "@mui/icons-material";

figma.connect(
  RemoveModeratorOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3414",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RemoveModeratorOutlined {...props} />
  }
);