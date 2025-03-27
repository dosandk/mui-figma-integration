
import figma from "@figma/code-connect";
import {LastPageOutlined} from "@mui/icons-material";

figma.connect(
  LastPageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11477",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LastPageOutlined {...props} />
  }
);