
import figma from "@figma/code-connect";
import {PublishOutlined} from "@mui/icons-material";

figma.connect(
  PublishOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11572",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PublishOutlined {...props} />
  }
);