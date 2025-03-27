
import figma from "@figma/code-connect";
import {AddCardOutlined} from "@mui/icons-material";

figma.connect(
  AddCardOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866969",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddCardOutlined {...props} />
  }
);