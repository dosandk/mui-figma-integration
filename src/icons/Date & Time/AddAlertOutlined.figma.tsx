
import figma from "@figma/code-connect";
import {AddAlertOutlined} from "@mui/icons-material";

figma.connect(
  AddAlertOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866940",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddAlertOutlined {...props} />
  }
);