
import figma from "@figma/code-connect";
import {GppBadOutlined} from "@mui/icons-material";

figma.connect(
  GppBadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3411",
  { 
    props: {
    
    },
    example: ({ ...props }) => <GppBadOutlined {...props} />
  }
);