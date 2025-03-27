
import figma from "@figma/code-connect";
import {CardMembershipOutlined} from "@mui/icons-material";

figma.connect(
  CardMembershipOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866982",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CardMembershipOutlined {...props} />
  }
);