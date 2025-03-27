
import figma from "@figma/code-connect";
import {SegmentOutlined} from "@mui/icons-material";

figma.connect(
  SegmentOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3585",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SegmentOutlined {...props} />
  }
);