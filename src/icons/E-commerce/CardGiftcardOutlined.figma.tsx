
import figma from "@figma/code-connect";
import {CardGiftcardOutlined} from "@mui/icons-material";

figma.connect(
  CardGiftcardOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866980",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CardGiftcardOutlined {...props} />
  }
);