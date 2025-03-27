
import figma from "@figma/code-connect";
import {CastleOutlined} from "@mui/icons-material";

figma.connect(
  CastleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3830",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CastleOutlined {...props} />
  }
);