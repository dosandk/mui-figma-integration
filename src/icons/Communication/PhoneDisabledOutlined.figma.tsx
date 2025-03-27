
import figma from "@figma/code-connect";
import {PhoneDisabledOutlined} from "@mui/icons-material";

figma.connect(
  PhoneDisabledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3036",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhoneDisabledOutlined {...props} />
  }
);