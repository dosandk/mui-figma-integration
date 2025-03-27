
import figma from "@figma/code-connect";
import {DateRangeOutlined} from "@mui/icons-material";

figma.connect(
  DateRangeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:70648",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DateRangeOutlined {...props} />
  }
);