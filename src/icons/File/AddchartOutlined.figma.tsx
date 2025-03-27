
import figma from "@figma/code-connect";
import {AddchartOutlined} from "@mui/icons-material";

figma.connect(
  AddchartOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3619",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddchartOutlined {...props} />
  }
);