
import figma from "@figma/code-connect";
import {ContactPhoneOutlined} from "@mui/icons-material";

figma.connect(
  ContactPhoneOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867075",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContactPhoneOutlined {...props} />
  }
);