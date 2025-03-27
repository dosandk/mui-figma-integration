
import figma from "@figma/code-connect";
import {SpellcheckOutlined} from "@mui/icons-material";

figma.connect(
  SpellcheckOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12422",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SpellcheckOutlined {...props} />
  }
);