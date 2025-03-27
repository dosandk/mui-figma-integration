
import figma from "@figma/code-connect";
import {FileCopyFilled} from "@mui/icons-material";

figma.connect(
  FileCopyFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13168",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FileCopyFilled {...props} />
  }
);