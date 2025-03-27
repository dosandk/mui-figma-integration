
import figma from "@figma/code-connect";
import {MarkEmailReadOutlined} from "@mui/icons-material";

figma.connect(
  MarkEmailReadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3056",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MarkEmailReadOutlined {...props} />
  }
);