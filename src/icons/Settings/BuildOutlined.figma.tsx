
import figma from "@figma/code-connect";
import {BuildOutlined} from "@mui/icons-material";

figma.connect(
  BuildOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13067",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BuildOutlined {...props} />
  }
);