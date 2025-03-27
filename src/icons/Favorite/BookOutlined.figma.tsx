
import figma from "@figma/code-connect";
import {BookOutlined} from "@mui/icons-material";

figma.connect(
  BookOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3749",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BookOutlined {...props} />
  }
);