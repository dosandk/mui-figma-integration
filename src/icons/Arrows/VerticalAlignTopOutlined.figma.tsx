
import figma from "@figma/code-connect";
import {VerticalAlignTopOutlined} from "@mui/icons-material";

figma.connect(
  VerticalAlignTopOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11471",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VerticalAlignTopOutlined {...props} />
  }
);