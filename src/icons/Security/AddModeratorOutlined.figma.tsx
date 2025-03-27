
import figma from "@figma/code-connect";
import {AddModeratorOutlined} from "@mui/icons-material";

figma.connect(
  AddModeratorOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3417",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddModeratorOutlined {...props} />
  }
);