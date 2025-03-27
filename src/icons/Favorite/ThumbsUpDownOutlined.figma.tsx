
import figma from "@figma/code-connect";
import {ThumbsUpDownOutlined} from "@mui/icons-material";

figma.connect(
  ThumbsUpDownOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3742",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ThumbsUpDownOutlined {...props} />
  }
);