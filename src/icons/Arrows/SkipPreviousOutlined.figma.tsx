
import figma from "@figma/code-connect";
import {SkipPreviousOutlined} from "@mui/icons-material";

figma.connect(
  SkipPreviousOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112274",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SkipPreviousOutlined {...props} />
  }
);