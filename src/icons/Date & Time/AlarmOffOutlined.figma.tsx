
import figma from "@figma/code-connect";
import {AlarmOffOutlined} from "@mui/icons-material";

figma.connect(
  AlarmOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866936",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AlarmOffOutlined {...props} />
  }
);