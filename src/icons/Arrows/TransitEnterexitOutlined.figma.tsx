
import figma from "@figma/code-connect";
import {TransitEnterexitOutlined} from "@mui/icons-material";

figma.connect(
  TransitEnterexitOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11568",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TransitEnterexitOutlined {...props} />
  }
);