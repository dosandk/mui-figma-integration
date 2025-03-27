
import figma from "@figma/code-connect";
import {NotAccessibleOutlined} from "@mui/icons-material";

figma.connect(
  NotAccessibleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867021",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NotAccessibleOutlined {...props} />
  }
);