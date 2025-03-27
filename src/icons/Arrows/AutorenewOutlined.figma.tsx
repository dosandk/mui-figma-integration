
import figma from "@figma/code-connect";
import {AutorenewOutlined} from "@mui/icons-material";

figma.connect(
  AutorenewOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11531",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AutorenewOutlined {...props} />
  }
);