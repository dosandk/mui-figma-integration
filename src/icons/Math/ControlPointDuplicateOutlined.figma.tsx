
import figma from "@figma/code-connect";
import {ControlPointDuplicateOutlined} from "@mui/icons-material";

figma.connect(
  ControlPointDuplicateOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12614",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ControlPointDuplicateOutlined {...props} />
  }
);