
import figma from "@figma/code-connect";
import {PlagiarismOutlined} from "@mui/icons-material";

figma.connect(
  PlagiarismOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3584",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlagiarismOutlined {...props} />
  }
);