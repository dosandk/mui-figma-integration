
import figma from "@figma/code-connect";
import {TextFieldsOutlined} from "@mui/icons-material";

figma.connect(
  TextFieldsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3223",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TextFieldsOutlined {...props} />
  }
);