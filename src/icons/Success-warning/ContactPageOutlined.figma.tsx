
import figma from "@figma/code-connect";
import {ContactPageOutlined} from "@mui/icons-material";

figma.connect(
  ContactPageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12465",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContactPageOutlined {...props} />
  }
);