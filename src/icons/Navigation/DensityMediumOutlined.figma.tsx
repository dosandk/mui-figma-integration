
import figma from "@figma/code-connect";
import {DensityMediumOutlined} from "@mui/icons-material";

figma.connect(
  DensityMediumOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3482",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DensityMediumOutlined {...props} />
  }
);