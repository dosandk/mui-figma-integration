
import figma from "@figma/code-connect";
import {ContactMailOutlined} from "@mui/icons-material";

figma.connect(
  ContactMailOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867079",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContactMailOutlined {...props} />
  }
);