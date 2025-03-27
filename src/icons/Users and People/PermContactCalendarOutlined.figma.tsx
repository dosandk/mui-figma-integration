
import figma from "@figma/code-connect";
import {PermContactCalendarOutlined} from "@mui/icons-material";

figma.connect(
  PermContactCalendarOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867068",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PermContactCalendarOutlined {...props} />
  }
);