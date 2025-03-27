
import figma from "@figma/code-connect";
import {AtmOutlined} from "@mui/icons-material";

figma.connect(
  AtmOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866976",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AtmOutlined {...props} />
  }
);