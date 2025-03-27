
import figma from "@figma/code-connect";
import {GroupAddOutlined} from "@mui/icons-material";

figma.connect(
  GroupAddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11686",
  { 
    props: {
    
    },
    example: ({ ...props }) => <GroupAddOutlined {...props} />
  }
);