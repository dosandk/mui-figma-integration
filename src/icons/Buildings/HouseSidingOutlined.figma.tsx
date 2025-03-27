
import figma from "@figma/code-connect";
import {HouseSidingOutlined} from "@mui/icons-material";

figma.connect(
  HouseSidingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3816",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HouseSidingOutlined {...props} />
  }
);