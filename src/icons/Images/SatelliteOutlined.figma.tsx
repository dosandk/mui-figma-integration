
import figma from "@figma/code-connect";
import {SatelliteOutlined} from "@mui/icons-material";

figma.connect(
  SatelliteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3782",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SatelliteOutlined {...props} />
  }
);