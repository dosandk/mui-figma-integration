
import figma from "@figma/code-connect";
import {TabOutlined} from "@mui/icons-material";

figma.connect(
  TabOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3610",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TabOutlined {...props} />
  }
);