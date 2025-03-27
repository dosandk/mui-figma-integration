
import figma from "@figma/code-connect";
import {RequestPageOutlined} from "@mui/icons-material";

figma.connect(
  RequestPageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866962",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RequestPageOutlined {...props} />
  }
);