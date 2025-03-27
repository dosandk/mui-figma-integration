
import figma from "@figma/code-connect";
import {SnowshoeingOutlined} from "@mui/icons-material";

figma.connect(
  SnowshoeingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867039",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SnowshoeingOutlined {...props} />
  }
);