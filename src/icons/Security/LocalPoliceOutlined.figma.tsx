
import figma from "@figma/code-connect";
import {LocalPoliceOutlined} from "@mui/icons-material";

figma.connect(
  LocalPoliceOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3415",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocalPoliceOutlined {...props} />
  }
);