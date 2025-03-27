
import figma from "@figma/code-connect";
import {VerticalAlignCenterOutlined} from "@mui/icons-material";

figma.connect(
  VerticalAlignCenterOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11374",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VerticalAlignCenterOutlined {...props} />
  }
);