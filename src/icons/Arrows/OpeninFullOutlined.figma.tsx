
import figma from "@figma/code-connect";
import {OpeninFullOutlined} from "@mui/icons-material";

figma.connect(
  OpeninFullOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11415",
  { 
    props: {
    
    },
    example: ({ ...props }) => <OpeninFullOutlined {...props} />
  }
);