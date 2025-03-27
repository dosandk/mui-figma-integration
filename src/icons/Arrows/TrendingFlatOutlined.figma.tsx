
import figma from "@figma/code-connect";
import {TrendingFlatOutlined} from "@mui/icons-material";

figma.connect(
  TrendingFlatOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11328",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TrendingFlatOutlined {...props} />
  }
);