
import figma from "@figma/code-connect";
import {TextRotateUpOutlined} from "@mui/icons-material";

figma.connect(
  TextRotateUpOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3218",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TextRotateUpOutlined {...props} />
  }
);