
import figma from "@figma/code-connect";
import {DoDisturbOutlined} from "@mui/icons-material";

figma.connect(
  DoDisturbOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12623",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DoDisturbOutlined {...props} />
  }
);