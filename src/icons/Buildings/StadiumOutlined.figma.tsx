
import figma from "@figma/code-connect";
import {StadiumOutlined} from "@mui/icons-material";

figma.connect(
  StadiumOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3836",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StadiumOutlined {...props} />
  }
);