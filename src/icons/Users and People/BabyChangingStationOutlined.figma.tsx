
import figma from "@figma/code-connect";
import {BabyChangingStationOutlined} from "@mui/icons-material";

figma.connect(
  BabyChangingStationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867047",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BabyChangingStationOutlined {...props} />
  }
);