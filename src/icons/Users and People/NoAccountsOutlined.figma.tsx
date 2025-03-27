
import figma from "@figma/code-connect";
import {NoAccountsOutlined} from "@mui/icons-material";

figma.connect(
  NoAccountsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11735",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NoAccountsOutlined {...props} />
  }
);