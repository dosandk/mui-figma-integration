
import figma from "@figma/code-connect";
import {TableViewFilled} from "@mui/icons-material";

figma.connect(
  TableViewFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13176",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TableViewFilled {...props} />
  }
);