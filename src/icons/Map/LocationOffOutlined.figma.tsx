
import figma from "@figma/code-connect";
import {LocationOffOutlined} from "@mui/icons-material";

figma.connect(
  LocationOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3143",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocationOffOutlined {...props} />
  }
);