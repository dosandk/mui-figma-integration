
import figma from "@figma/code-connect";
import {ChangeCircleOutlined} from "@mui/icons-material";

figma.connect(
  ChangeCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12610",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ChangeCircleOutlined {...props} />
  }
);