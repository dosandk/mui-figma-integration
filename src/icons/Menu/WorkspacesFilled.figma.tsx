
import figma from "@figma/code-connect";
import {WorkspacesFilled} from "@mui/icons-material";

figma.connect(
  WorkspacesFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13232",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WorkspacesFilled {...props} />
  }
);