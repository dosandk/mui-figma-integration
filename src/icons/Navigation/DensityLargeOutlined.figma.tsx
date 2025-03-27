
import figma from "@figma/code-connect";
import {DensityLargeOutlined} from "@mui/icons-material";

figma.connect(
  DensityLargeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3478",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DensityLargeOutlined {...props} />
  }
);