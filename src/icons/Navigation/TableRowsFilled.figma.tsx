
import figma from "@figma/code-connect";
import {TableRowsFilled} from "@mui/icons-material";

figma.connect(
  TableRowsFilled, 
  "<FIGMA_ICONS_BASE>?node-id=208:101686",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TableRowsFilled {...props} />
  }
);