
import figma from "@figma/code-connect";
import {WomanOutlined} from "@mui/icons-material";

figma.connect(
  WomanOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867013",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WomanOutlined {...props} />
  }
);