
import figma from "@figma/code-connect";
import {TocOutlined} from "@mui/icons-material";

figma.connect(
  TocOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3578",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TocOutlined {...props} />
  }
);