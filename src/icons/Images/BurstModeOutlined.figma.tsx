
import figma from "@figma/code-connect";
import {BurstModeOutlined} from "@mui/icons-material";

figma.connect(
  BurstModeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3790",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BurstModeOutlined {...props} />
  }
);