
import figma from "@figma/code-connect";
import {FavoriteBorderOutlined} from "@mui/icons-material";

figma.connect(
  FavoriteBorderOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3746",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FavoriteBorderOutlined {...props} />
  }
);