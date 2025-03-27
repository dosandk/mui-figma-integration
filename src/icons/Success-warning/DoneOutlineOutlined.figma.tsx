
import figma from "@figma/code-connect";
import {DoneOutlineOutlined} from "@mui/icons-material";

figma.connect(
  DoneOutlineOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12380",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DoneOutlineOutlined {...props} />
  }
);