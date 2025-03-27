
import figma from "@figma/code-connect";
import {DomainAddOutlined} from "@mui/icons-material";

figma.connect(
  DomainAddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3824",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DomainAddOutlined {...props} />
  }
);