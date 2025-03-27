
import figma from "@figma/code-connect";
import {OpenWithOutlined} from "@mui/icons-material";

figma.connect(
  OpenWithOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11566",
  { 
    props: {
    
    },
    example: ({ ...props }) => <OpenWithOutlined {...props} />
  }
);