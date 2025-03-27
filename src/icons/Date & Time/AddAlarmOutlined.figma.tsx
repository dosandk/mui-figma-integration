
import figma from "@figma/code-connect";
import {AddAlarmOutlined} from "@mui/icons-material";

figma.connect(
  AddAlarmOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866934",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddAlarmOutlined {...props} />
  }
);