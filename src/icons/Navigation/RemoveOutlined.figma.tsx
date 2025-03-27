
import figma from "@figma/code-connect";
import {RemoveOutlined} from "@mui/icons-material";

figma.connect(
  RemoveOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=317:89884",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RemoveOutlined {...props} />
  }
);