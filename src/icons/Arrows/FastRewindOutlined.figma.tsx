
import figma from "@figma/code-connect";
import {FastRewindOutlined} from "@mui/icons-material";

figma.connect(
  FastRewindOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11460",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FastRewindOutlined {...props} />
  }
);