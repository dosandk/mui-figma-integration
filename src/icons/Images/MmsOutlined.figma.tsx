
import figma from "@figma/code-connect";
import {MmsOutlined} from "@mui/icons-material";

figma.connect(
  MmsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3781",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MmsOutlined {...props} />
  }
);