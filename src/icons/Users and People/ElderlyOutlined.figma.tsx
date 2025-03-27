
import figma from "@figma/code-connect";
import {ElderlyOutlined} from "@mui/icons-material";

figma.connect(
  ElderlyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867028",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ElderlyOutlined {...props} />
  }
);