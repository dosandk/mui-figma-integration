
import figma from "@figma/code-connect";
import {TextsmsOutlined} from "@mui/icons-material";

figma.connect(
  TextsmsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12073",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TextsmsOutlined {...props} />
  }
);