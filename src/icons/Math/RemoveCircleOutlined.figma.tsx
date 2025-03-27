
import figma from "@figma/code-connect";
import {RemoveCircleOutlined} from "@mui/icons-material";

figma.connect(
  RemoveCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12642",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RemoveCircleOutlined {...props} />
  }
);