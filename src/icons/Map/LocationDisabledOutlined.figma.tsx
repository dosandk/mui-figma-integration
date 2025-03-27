
import figma from "@figma/code-connect";
import {LocationDisabledOutlined} from "@mui/icons-material";

figma.connect(
  LocationDisabledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3138",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocationDisabledOutlined {...props} />
  }
);