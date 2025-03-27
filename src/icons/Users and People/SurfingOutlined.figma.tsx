
import figma from "@figma/code-connect";
import {SurfingOutlined} from "@mui/icons-material";

figma.connect(
  SurfingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867017",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SurfingOutlined {...props} />
  }
);