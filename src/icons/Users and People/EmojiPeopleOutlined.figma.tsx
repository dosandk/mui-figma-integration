
import figma from "@figma/code-connect";
import {EmojiPeopleOutlined} from "@mui/icons-material";

figma.connect(
  EmojiPeopleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867030",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EmojiPeopleOutlined {...props} />
  }
);