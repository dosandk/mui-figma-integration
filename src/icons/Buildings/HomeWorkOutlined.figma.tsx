
import figma from "@figma/code-connect";
import {HomeWorkOutlined} from "@mui/icons-material";

figma.connect(
  HomeWorkOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13382",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HomeWorkOutlined {...props} />
  }
);