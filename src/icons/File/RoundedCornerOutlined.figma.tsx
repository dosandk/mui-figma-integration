
import figma from "@figma/code-connect";
import {RoundedCornerOutlined} from "@mui/icons-material";

figma.connect(
  RoundedCornerOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3586",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RoundedCornerOutlined {...props} />
  }
);