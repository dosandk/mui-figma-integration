
import figma from "@figma/code-connect";
import {AirlineSeatLegroomNormalOutlined} from "@mui/icons-material";

figma.connect(
  AirlineSeatLegroomNormalOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867058",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AirlineSeatLegroomNormalOutlined {...props} />
  }
);