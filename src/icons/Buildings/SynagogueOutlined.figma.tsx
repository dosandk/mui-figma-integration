
import figma from "@figma/code-connect";
import {SynagogueOutlined} from "@mui/icons-material";

figma.connect(
  SynagogueOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3808",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SynagogueOutlined {...props} />
  }
);