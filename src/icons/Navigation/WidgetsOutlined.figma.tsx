
import figma from "@figma/code-connect";
import {WidgetsOutlined} from "@mui/icons-material";

figma.connect(
  WidgetsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12729",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WidgetsOutlined {...props} />
  }
);