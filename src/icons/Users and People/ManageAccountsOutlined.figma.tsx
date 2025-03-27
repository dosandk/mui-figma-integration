
import figma from "@figma/code-connect";
import {ManageAccountsOutlined} from "@mui/icons-material";

figma.connect(
  ManageAccountsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11710",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ManageAccountsOutlined {...props} />
  }
);