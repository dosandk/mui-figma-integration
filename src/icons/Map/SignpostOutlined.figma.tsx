
import figma from "@figma/code-connect";
import {SignpostOutlined} from "@mui/icons-material";

figma.connect(
  SignpostOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12233",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SignpostOutlined {...props} />
  }
);