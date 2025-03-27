
import figma from "@figma/code-connect";
import {MemoryOutlined} from "@mui/icons-material";

figma.connect(
  MemoryOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12742",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MemoryOutlined {...props} />
  }
);