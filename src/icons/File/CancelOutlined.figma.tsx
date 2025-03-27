
import figma from "@figma/code-connect";
import {CancelOutlined} from "@mui/icons-material";

figma.connect(
  CancelOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13000",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CancelOutlined {...props} />
  }
);