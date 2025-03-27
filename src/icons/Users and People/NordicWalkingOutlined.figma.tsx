
import figma from "@figma/code-connect";
import {NordicWalkingOutlined} from "@mui/icons-material";

figma.connect(
  NordicWalkingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867036",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NordicWalkingOutlined {...props} />
  }
);