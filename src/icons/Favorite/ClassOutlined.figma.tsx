
import figma from "@figma/code-connect";
import {ClassOutlined} from "@mui/icons-material";

figma.connect(
  ClassOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3745",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ClassOutlined {...props} />
  }
);