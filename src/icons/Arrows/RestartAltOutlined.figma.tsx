
import figma from "@figma/code-connect";
import {RestartAltOutlined} from "@mui/icons-material";

figma.connect(
  RestartAltOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11525",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RestartAltOutlined {...props} />
  }
);