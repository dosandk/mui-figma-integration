
import figma from "@figma/code-connect";
import {GroupRemoveOutlined} from "@mui/icons-material";

figma.connect(
  GroupRemoveOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11684",
  { 
    props: {
    
    },
    example: ({ ...props }) => <GroupRemoveOutlined {...props} />
  }
);