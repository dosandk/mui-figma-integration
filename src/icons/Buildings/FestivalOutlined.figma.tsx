
import figma from "@figma/code-connect";
import {FestivalOutlined} from "@mui/icons-material";

figma.connect(
  FestivalOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3826",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FestivalOutlined {...props} />
  }
);