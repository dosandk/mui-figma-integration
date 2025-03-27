
import figma from "@figma/code-connect";
import {PeopleAltOutlined} from "@mui/icons-material";

figma.connect(
  PeopleAltOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:50665",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PeopleAltOutlined {...props} />
  }
);