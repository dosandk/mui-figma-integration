
import figma from "@figma/code-connect";
import {NoEncryptionOutlined} from "@mui/icons-material";

figma.connect(
  NoEncryptionOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3406",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NoEncryptionOutlined {...props} />
  }
);