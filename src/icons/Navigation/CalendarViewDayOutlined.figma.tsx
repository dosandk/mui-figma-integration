
import figma from "@figma/code-connect";
import {CalendarViewDayOutlined} from "@mui/icons-material";

figma.connect(
  CalendarViewDayOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3464",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CalendarViewDayOutlined {...props} />
  }
);