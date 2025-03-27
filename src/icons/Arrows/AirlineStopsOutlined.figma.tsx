
import figma from "@figma/code-connect";
import {AirlineStopsOutlined} from "@mui/icons-material";

figma.connect(
  AirlineStopsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11489",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AirlineStopsOutlined {...props} />
  }
);