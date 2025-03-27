
import figma from "@figma/code-connect";
import {RowingOutlined} from "@mui/icons-material";

figma.connect(
  RowingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867020",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RowingOutlined {...props} />
  }
);