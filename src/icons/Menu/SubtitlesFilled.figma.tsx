
import figma from "@figma/code-connect";
import {SubtitlesFilled} from "@mui/icons-material";

figma.connect(
  SubtitlesFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13184",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SubtitlesFilled {...props} />
  }
);