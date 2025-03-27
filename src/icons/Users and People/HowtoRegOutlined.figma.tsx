
import figma from "@figma/code-connect";
import {HowtoRegOutlined} from "@mui/icons-material";

figma.connect(
  HowtoRegOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11790",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HowtoRegOutlined {...props} />
  }
);