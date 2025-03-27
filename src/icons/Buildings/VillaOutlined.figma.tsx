
import figma from "@figma/code-connect";
import {VillaOutlined} from "@mui/icons-material";

figma.connect(
  VillaOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13427",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VillaOutlined {...props} />
  }
);