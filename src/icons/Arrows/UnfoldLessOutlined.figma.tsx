
import figma from "@figma/code-connect";
import {UnfoldLessOutlined} from "@mui/icons-material";

figma.connect(
  UnfoldLessOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11366",
  { 
    props: {
    
    },
    example: ({ ...props }) => <UnfoldLessOutlined {...props} />
  }
);