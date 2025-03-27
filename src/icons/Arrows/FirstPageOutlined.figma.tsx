
import figma from "@figma/code-connect";
import {FirstPageOutlined} from "@mui/icons-material";

figma.connect(
  FirstPageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11475",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FirstPageOutlined {...props} />
  }
);