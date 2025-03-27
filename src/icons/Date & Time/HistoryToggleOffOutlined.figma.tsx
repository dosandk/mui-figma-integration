
import figma from "@figma/code-connect";
import {HistoryToggleOffOutlined} from "@mui/icons-material";

figma.connect(
  HistoryToggleOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866921",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HistoryToggleOffOutlined {...props} />
  }
);