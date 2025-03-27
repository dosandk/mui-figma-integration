
import figma from "@figma/code-connect";
import {MapOutlined} from "@mui/icons-material";

figma.connect(
  MapOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3142",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MapOutlined {...props} />
  }
);