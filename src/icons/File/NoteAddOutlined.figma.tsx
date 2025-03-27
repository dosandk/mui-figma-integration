
import figma from "@figma/code-connect";
import {NoteAddOutlined} from "@mui/icons-material";

figma.connect(
  NoteAddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12981",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NoteAddOutlined {...props} />
  }
);