
import figma from "@figma/code-connect";
import {CalendarTodayOutlined} from "@mui/icons-material";

figma.connect(
  CalendarTodayOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112409",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CalendarTodayOutlined {...props} />
  }
);