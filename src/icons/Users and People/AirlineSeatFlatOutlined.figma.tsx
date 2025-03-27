
import figma from "@figma/code-connect";
import {AirlineSeatFlatOutlined} from "@mui/icons-material";

figma.connect(
  AirlineSeatFlatOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867043",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AirlineSeatFlatOutlined {...props} />
  }
);