
import figma from "@figma/code-connect";
import {RoundaboutLeftOutlined} from "@mui/icons-material";

figma.connect(
  RoundaboutLeftOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11379",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RoundaboutLeftOutlined {...props} />
  }
);