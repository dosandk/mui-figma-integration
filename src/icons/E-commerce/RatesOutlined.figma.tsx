
import figma from "@figma/code-connect";
import {RatesOutlined} from "@mui/icons-material";

figma.connect(
  RatesOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11301",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RatesOutlined {...props} />
  }
);