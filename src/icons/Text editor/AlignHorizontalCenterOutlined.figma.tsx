
import figma from "@figma/code-connect";
import {AlignHorizontalCenterOutlined} from "@mui/icons-material";

figma.connect(
  AlignHorizontalCenterOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3207",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AlignHorizontalCenterOutlined {...props} />
  }
);