
import figma from "@figma/code-connect";
import {FileCopyOutlined} from "@mui/icons-material";

figma.connect(
  FileCopyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3583",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FileCopyOutlined {...props} />
  }
);