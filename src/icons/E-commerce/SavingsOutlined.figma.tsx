
import figma from "@figma/code-connect";
import {SavingsOutlined} from "@mui/icons-material";

figma.connect(
  SavingsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866951",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SavingsOutlined {...props} />
  }
);