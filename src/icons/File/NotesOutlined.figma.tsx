
import figma from "@figma/code-connect";
import {NotesOutlined} from "@mui/icons-material";

figma.connect(
  NotesOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12882",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NotesOutlined {...props} />
  }
);