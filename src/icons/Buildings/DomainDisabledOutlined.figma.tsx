
import figma from "@figma/code-connect";
import {DomainDisabledOutlined} from "@mui/icons-material";

figma.connect(
  DomainDisabledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3827",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DomainDisabledOutlined {...props} />
  }
);