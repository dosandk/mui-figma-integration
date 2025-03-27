
import figma from "@figma/code-connect";
import {ArrowBackIosNewOutlined} from "@mui/icons-material";

figma.connect(
  ArrowBackIosNewOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11325",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ArrowBackIosNewOutlined {...props} />
  }
);