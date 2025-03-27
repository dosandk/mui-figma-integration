
import figma from "@figma/code-connect";
import {RemoveCircleOutlineOutlined} from "@mui/icons-material";

figma.connect(
  RemoveCircleOutlineOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12644",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RemoveCircleOutlineOutlined {...props} />
  }
);