
import figma from "@figma/code-connect";
import {HeightOutlined} from "@mui/icons-material";

figma.connect(
  HeightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11417",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HeightOutlined {...props} />
  }
);