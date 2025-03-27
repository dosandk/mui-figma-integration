
import figma from "@figma/code-connect";
import {InfoOutlined} from "@mui/icons-material";

figma.connect(
  InfoOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:71541",
  { 
    props: {
    
    },
    example: ({ ...props }) => <InfoOutlined {...props} />
  }
);