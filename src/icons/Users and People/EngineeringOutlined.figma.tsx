
import figma from "@figma/code-connect";
import {EngineeringOutlined} from "@mui/icons-material";

figma.connect(
  EngineeringOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11740",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EngineeringOutlined {...props} />
  }
);