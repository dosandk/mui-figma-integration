
import figma from "@figma/code-connect";
import {TextRotationDownOutlined} from "@mui/icons-material";

figma.connect(
  TextRotationDownOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3202",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TextRotationDownOutlined {...props} />
  }
);