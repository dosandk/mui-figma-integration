
import figma from "@figma/code-connect";
import {SportsKabaddiOutlined} from "@mui/icons-material";

figma.connect(
  SportsKabaddiOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867029",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SportsKabaddiOutlined {...props} />
  }
);