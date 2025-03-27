
import figma from "@figma/code-connect";
import {BlockOutlined} from "@mui/icons-material";

figma.connect(
  BlockOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12608",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BlockOutlined {...props} />
  }
);