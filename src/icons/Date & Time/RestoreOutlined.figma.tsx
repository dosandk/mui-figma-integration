
import figma from "@figma/code-connect";
import {RestoreOutlined} from "@mui/icons-material";

figma.connect(
  RestoreOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11130",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RestoreOutlined {...props} />
  }
);