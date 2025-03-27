
import figma from "@figma/code-connect";
import {MapsHomeWorkFilled} from "@mui/icons-material";

figma.connect(
  MapsHomeWorkFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13170",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MapsHomeWorkFilled {...props} />
  }
);