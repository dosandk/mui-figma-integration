
import figma from "@figma/code-connect";
import {ModeofTravelOutlined} from "@mui/icons-material";

figma.connect(
  ModeofTravelOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12188",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ModeofTravelOutlined {...props} />
  }
);