
import figma from "@figma/code-connect";
import {SleddingOutlined} from "@mui/icons-material";

figma.connect(
  SleddingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867016",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SleddingOutlined {...props} />
  }
);