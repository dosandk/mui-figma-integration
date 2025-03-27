
import figma from "@figma/code-connect";
import {FunctionsOutlined} from "@mui/icons-material";

figma.connect(
  FunctionsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12629",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FunctionsOutlined {...props} />
  }
);