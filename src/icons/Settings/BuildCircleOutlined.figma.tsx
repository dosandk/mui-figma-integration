
import figma from "@figma/code-connect";
import {BuildCircleOutlined} from "@mui/icons-material";

figma.connect(
  BuildCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13069",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BuildCircleOutlined {...props} />
  }
);