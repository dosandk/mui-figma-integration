
import figma from "@figma/code-connect";
import {SwitchLeftOutlined} from "@mui/icons-material";

figma.connect(
  SwitchLeftOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11395",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwitchLeftOutlined {...props} />
  }
);