
import figma from "@figma/code-connect";
import {DoubleArrowOutlined} from "@mui/icons-material";

figma.connect(
  DoubleArrowOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11335",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DoubleArrowOutlined {...props} />
  }
);