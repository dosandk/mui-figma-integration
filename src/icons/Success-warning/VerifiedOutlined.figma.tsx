
import figma from "@figma/code-connect";
import {VerifiedOutlined} from "@mui/icons-material";

figma.connect(
  VerifiedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12436",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VerifiedOutlined {...props} />
  }
);