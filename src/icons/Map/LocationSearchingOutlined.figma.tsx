
import figma from "@figma/code-connect";
import {LocationSearchingOutlined} from "@mui/icons-material";

figma.connect(
  LocationSearchingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3132",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocationSearchingOutlined {...props} />
  }
);