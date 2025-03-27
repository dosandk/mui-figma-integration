
import figma from "@figma/code-connect";
import {ExpandOutlined} from "@mui/icons-material";

figma.connect(
  ExpandOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11420",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ExpandOutlined {...props} />
  }
);