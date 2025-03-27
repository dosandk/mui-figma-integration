
import figma from "@figma/code-connect";
import {ManageSearchOutlined} from "@mui/icons-material";

figma.connect(
  ManageSearchOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13029",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ManageSearchOutlined {...props} />
  }
);