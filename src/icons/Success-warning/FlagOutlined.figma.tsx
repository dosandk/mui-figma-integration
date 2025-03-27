
import figma from "@figma/code-connect";
import {FlagOutlined} from "@mui/icons-material";

figma.connect(
  FlagOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12473",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FlagOutlined {...props} />
  }
);