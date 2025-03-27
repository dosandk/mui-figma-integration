
import figma from "@figma/code-connect";
import {NearMeOutlined} from "@mui/icons-material";

figma.connect(
  NearMeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3146",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NearMeOutlined {...props} />
  }
);