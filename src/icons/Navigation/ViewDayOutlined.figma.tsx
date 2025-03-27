
import figma from "@figma/code-connect";
import {ViewDayOutlined} from "@mui/icons-material";

figma.connect(
  ViewDayOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12719",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ViewDayOutlined {...props} />
  }
);