
import figma from "@figma/code-connect";
import {ViewHeadlineOutlined} from "@mui/icons-material";

figma.connect(
  ViewHeadlineOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112405",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ViewHeadlineOutlined {...props} />
  }
);