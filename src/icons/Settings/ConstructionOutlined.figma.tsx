
import figma from "@figma/code-connect";
import {ConstructionOutlined} from "@mui/icons-material";

figma.connect(
  ConstructionOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13035",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ConstructionOutlined {...props} />
  }
);