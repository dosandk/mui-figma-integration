
import figma from "@figma/code-connect";
import {GirlOutlined} from "@mui/icons-material";

figma.connect(
  GirlOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867071",
  { 
    props: {
    
    },
    example: ({ ...props }) => <GirlOutlined {...props} />
  }
);