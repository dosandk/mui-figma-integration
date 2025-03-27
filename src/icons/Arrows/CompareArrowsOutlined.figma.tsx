
import figma from "@figma/code-connect";
import {CompareArrowsOutlined} from "@mui/icons-material";

figma.connect(
  CompareArrowsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11333",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CompareArrowsOutlined {...props} />
  }
);