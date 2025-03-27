
import figma from "@figma/code-connect";
import {VerticalAlignBottomOutlined} from "@mui/icons-material";

figma.connect(
  VerticalAlignBottomOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11465",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VerticalAlignBottomOutlined {...props} />
  }
);