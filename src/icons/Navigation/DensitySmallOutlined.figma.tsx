
import figma from "@figma/code-connect";
import {DensitySmallOutlined} from "@mui/icons-material";

figma.connect(
  DensitySmallOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3475",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DensitySmallOutlined {...props} />
  }
);