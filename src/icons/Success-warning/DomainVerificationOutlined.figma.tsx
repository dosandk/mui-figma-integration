
import figma from "@figma/code-connect";
import {DomainVerificationOutlined} from "@mui/icons-material";

figma.connect(
  DomainVerificationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12384",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DomainVerificationOutlined {...props} />
  }
);