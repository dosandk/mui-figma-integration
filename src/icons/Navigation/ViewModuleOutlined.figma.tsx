
import figma from "@figma/code-connect";
import {ViewModuleOutlined} from "@mui/icons-material";

figma.connect(
  ViewModuleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112407",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ViewModuleOutlined {...props} />
  }
);