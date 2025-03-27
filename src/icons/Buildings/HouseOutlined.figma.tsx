
import figma from "@figma/code-connect";
import {HouseOutlined} from "@mui/icons-material";

figma.connect(
  HouseOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3814",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HouseOutlined {...props} />
  }
);