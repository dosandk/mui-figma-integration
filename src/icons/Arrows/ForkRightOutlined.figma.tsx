
import figma from "@figma/code-connect";
import {ForkRightOutlined} from "@mui/icons-material";

figma.connect(
  ForkRightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11483",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ForkRightOutlined {...props} />
  }
);