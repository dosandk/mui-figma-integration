
import figma from "@figma/code-connect";
import {GppGoodOutlined} from "@mui/icons-material";

figma.connect(
  GppGoodOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3418",
  { 
    props: {
    
    },
    example: ({ ...props }) => <GppGoodOutlined {...props} />
  }
);