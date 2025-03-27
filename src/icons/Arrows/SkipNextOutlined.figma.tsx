
import figma from "@figma/code-connect";
import {SkipNextOutlined} from "@mui/icons-material";

figma.connect(
  SkipNextOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112279",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SkipNextOutlined {...props} />
  }
);