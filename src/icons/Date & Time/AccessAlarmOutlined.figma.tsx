
import figma from "@figma/code-connect";
import {AccessAlarmOutlined} from "@mui/icons-material";

figma.connect(
  AccessAlarmOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866942",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccessAlarmOutlined {...props} />
  }
);