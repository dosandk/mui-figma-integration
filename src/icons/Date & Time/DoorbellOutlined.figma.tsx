
import figma from "@figma/code-connect";
import {DoorbellOutlined} from "@mui/icons-material";

figma.connect(
  DoorbellOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866937",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DoorbellOutlined {...props} />
  }
);