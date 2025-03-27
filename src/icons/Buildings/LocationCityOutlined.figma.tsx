
import figma from "@figma/code-connect";
import {LocationCityOutlined} from "@mui/icons-material";

figma.connect(
  LocationCityOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3810",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocationCityOutlined {...props} />
  }
);