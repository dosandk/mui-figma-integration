
import figma from "@figma/code-connect";
import {PsychologyOutlined} from "@mui/icons-material";

figma.connect(
  PsychologyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867044",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PsychologyOutlined {...props} />
  }
);