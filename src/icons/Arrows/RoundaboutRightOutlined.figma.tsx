
import figma from "@figma/code-connect";
import {RoundaboutRightOutlined} from "@mui/icons-material";

figma.connect(
  RoundaboutRightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11376",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RoundaboutRightOutlined {...props} />
  }
);