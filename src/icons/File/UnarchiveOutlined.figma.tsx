
import figma from "@figma/code-connect";
import {UnarchiveOutlined} from "@mui/icons-material";

figma.connect(
  UnarchiveOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3607",
  { 
    props: {
    
    },
    example: ({ ...props }) => <UnarchiveOutlined {...props} />
  }
);