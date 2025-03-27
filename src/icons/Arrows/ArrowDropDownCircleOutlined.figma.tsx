
import figma from "@figma/code-connect";
import {ArrowDropDownCircleOutlined} from "@mui/icons-material";

figma.connect(
  ArrowDropDownCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11428",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ArrowDropDownCircleOutlined {...props} />
  }
);