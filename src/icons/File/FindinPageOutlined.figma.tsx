
import figma from "@figma/code-connect";
import {FindinPageOutlined} from "@mui/icons-material";

figma.connect(
  FindinPageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3589",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FindinPageOutlined {...props} />
  }
);