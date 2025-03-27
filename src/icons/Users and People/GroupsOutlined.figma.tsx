
import figma from "@figma/code-connect";
import {GroupsOutlined} from "@mui/icons-material";

figma.connect(
  GroupsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11752",
  { 
    props: {
    
    },
    example: ({ ...props }) => <GroupsOutlined {...props} />
  }
);