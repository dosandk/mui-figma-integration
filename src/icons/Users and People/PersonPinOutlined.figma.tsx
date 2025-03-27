
import figma from "@figma/code-connect";
import {PersonPinOutlined} from "@mui/icons-material";

figma.connect(
  PersonPinOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867067",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PersonPinOutlined {...props} />
  }
);