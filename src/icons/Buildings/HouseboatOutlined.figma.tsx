
import figma from "@figma/code-connect";
import {HouseboatOutlined} from "@mui/icons-material";

figma.connect(
  HouseboatOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3818",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HouseboatOutlined {...props} />
  }
);