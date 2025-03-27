
import figma from "@figma/code-connect";
import {PasswordOutlined} from "@mui/icons-material";

figma.connect(
  PasswordOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12536",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PasswordOutlined {...props} />
  }
);