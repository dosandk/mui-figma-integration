
import figma from "@figma/code-connect";
import {TempleHinduOutlined} from "@mui/icons-material";

figma.connect(
  TempleHinduOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3807",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TempleHinduOutlined {...props} />
  }
);