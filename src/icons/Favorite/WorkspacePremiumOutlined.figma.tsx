
import figma from "@figma/code-connect";
import {WorkspacePremiumOutlined} from "@mui/icons-material";

figma.connect(
  WorkspacePremiumOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3754",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WorkspacePremiumOutlined {...props} />
  }
);