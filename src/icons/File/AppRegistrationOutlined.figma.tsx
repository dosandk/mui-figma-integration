
import figma from "@figma/code-connect";
import {AppRegistrationOutlined} from "@mui/icons-material";

figma.connect(
  AppRegistrationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12797",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AppRegistrationOutlined {...props} />
  }
);