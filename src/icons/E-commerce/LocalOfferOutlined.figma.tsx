
import figma from "@figma/code-connect";
import {LocalOfferOutlined} from "@mui/icons-material";

figma.connect(
  LocalOfferOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866956",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocalOfferOutlined {...props} />
  }
);