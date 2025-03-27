
import figma from "@figma/code-connect";
import {RemoveDoneOutlined} from "@mui/icons-material";

figma.connect(
  RemoveDoneOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12417",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RemoveDoneOutlined {...props} />
  }
);