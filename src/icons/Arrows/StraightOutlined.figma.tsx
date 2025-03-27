
import figma from "@figma/code-connect";
import {StraightOutlined} from "@mui/icons-material";

figma.connect(
  StraightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11319",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StraightOutlined {...props} />
  }
);