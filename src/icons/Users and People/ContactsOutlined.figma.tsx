
import figma from "@figma/code-connect";
import {ContactsOutlined} from "@mui/icons-material";

figma.connect(
  ContactsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867070",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContactsOutlined {...props} />
  }
);