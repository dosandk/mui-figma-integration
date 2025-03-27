
import figma from "@figma/code-connect";
import {MediationOutlined} from "@mui/icons-material";

figma.connect(
  MediationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11563",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MediationOutlined {...props} />
  }
);