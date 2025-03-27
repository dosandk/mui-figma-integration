
import figma from "@figma/code-connect";
import {AirlineSeatFlatAngledOutlined} from "@mui/icons-material";

figma.connect(
  AirlineSeatFlatAngledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867041",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AirlineSeatFlatAngledOutlined {...props} />
  }
);