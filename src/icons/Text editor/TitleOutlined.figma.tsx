
import figma from "@figma/code-connect";
import {TitleOutlined} from "@mui/icons-material";

figma.connect(
  TitleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11613:424595",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TitleOutlined {...props} />
  }
);