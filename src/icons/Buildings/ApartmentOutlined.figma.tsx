
import figma from "@figma/code-connect";
import {ApartmentOutlined} from "@mui/icons-material";

figma.connect(
  ApartmentOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9607:259085",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ApartmentOutlined {...props} />
  }
);