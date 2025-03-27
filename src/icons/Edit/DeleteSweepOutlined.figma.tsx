
import figma from "@figma/code-connect";
import {DeleteSweepOutlined} from "@mui/icons-material";

figma.connect(
  DeleteSweepOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12557",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DeleteSweepOutlined {...props} />
  }
);