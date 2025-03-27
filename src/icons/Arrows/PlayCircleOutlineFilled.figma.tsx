
import figma from "@figma/code-connect";
import {PlayCircleOutlineFilled} from "@mui/icons-material";

figma.connect(
  PlayCircleOutlineFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112396",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlayCircleOutlineFilled {...props} />
  }
);