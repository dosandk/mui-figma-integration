
import figma from "@figma/code-connect";
import {AirlineSeatReclineNormalOutlined} from "@mui/icons-material";

figma.connect(
  AirlineSeatReclineNormalOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867053",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AirlineSeatReclineNormalOutlined {...props} />
  }
);