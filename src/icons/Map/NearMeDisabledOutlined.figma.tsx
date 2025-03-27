
import figma from "@figma/code-connect";
import {NearMeDisabledOutlined} from "@mui/icons-material";

figma.connect(
  NearMeDisabledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3148",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NearMeDisabledOutlined {...props} />
  }
);