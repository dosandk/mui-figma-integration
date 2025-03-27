
import figma from "@figma/code-connect";
import {CasesOutlined} from "@mui/icons-material";

figma.connect(
  CasesOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12752",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CasesOutlined {...props} />
  }
);