
import figma from "@figma/code-connect";
import {TabUnselectedOutlined} from "@mui/icons-material";

figma.connect(
  TabUnselectedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3623",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TabUnselectedOutlined {...props} />
  }
);