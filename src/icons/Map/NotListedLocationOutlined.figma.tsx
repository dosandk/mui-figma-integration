
import figma from "@figma/code-connect";
import {NotListedLocationOutlined} from "@mui/icons-material";

figma.connect(
  NotListedLocationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3141",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NotListedLocationOutlined {...props} />
  }
);