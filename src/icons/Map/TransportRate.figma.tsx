
import figma from "@figma/code-connect";
import {TransportRate} from "@mui/icons-material";

figma.connect(
  TransportRate, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12161",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TransportRate {...props} />
  }
);