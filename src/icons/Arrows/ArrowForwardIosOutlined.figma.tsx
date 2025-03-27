
import figma from "@figma/code-connect";
import {ArrowForwardIosOutlined} from "@mui/icons-material";

figma.connect(
  ArrowForwardIosOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11322",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ArrowForwardIosOutlined {...props} />
  }
);