
import figma from "@figma/code-connect";
import {AttachMoneyOutlined} from "@mui/icons-material";

figma.connect(
  AttachMoneyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866960",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AttachMoneyOutlined {...props} />
  }
);