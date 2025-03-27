
import figma from "@figma/code-connect";
import {AirlineSeatLegroomExtraOutlined} from "@mui/icons-material";

figma.connect(
  AirlineSeatLegroomExtraOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867048",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AirlineSeatLegroomExtraOutlined {...props} />
  }
);