
import figma from "@figma/code-connect";
import {PersonAddDisabledOutlined} from "@mui/icons-material";

figma.connect(
  PersonAddDisabledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11705",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PersonAddDisabledOutlined {...props} />
  }
);