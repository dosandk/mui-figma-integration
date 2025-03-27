
import figma from "@figma/code-connect";
import {AddBusinessOutlined} from "@mui/icons-material";

figma.connect(
  AddBusinessOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866978",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddBusinessOutlined {...props} />
  }
);