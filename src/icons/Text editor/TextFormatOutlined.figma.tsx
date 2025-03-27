
import figma from "@figma/code-connect";
import {TextFormatOutlined} from "@mui/icons-material";

figma.connect(
  TextFormatOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3181",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TextFormatOutlined {...props} />
  }
);