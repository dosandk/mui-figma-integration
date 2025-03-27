
import figma from "@figma/code-connect";
import {PregnantWomanOutlined} from "@mui/icons-material";

figma.connect(
  PregnantWomanOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867046",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PregnantWomanOutlined {...props} />
  }
);