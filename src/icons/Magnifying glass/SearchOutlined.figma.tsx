
import figma from "@figma/code-connect";
import {SearchOutlined} from "@mui/icons-material";

figma.connect(
  SearchOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:72891",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SearchOutlined {...props} />
  }
);