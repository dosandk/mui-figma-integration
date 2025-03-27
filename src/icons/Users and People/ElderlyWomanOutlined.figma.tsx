
import figma from "@figma/code-connect";
import {ElderlyWomanOutlined} from "@mui/icons-material";

figma.connect(
  ElderlyWomanOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867078",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ElderlyWomanOutlined {...props} />
  }
);