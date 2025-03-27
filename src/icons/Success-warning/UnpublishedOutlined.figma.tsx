
import figma from "@figma/code-connect";
import {UnpublishedOutlined} from "@mui/icons-material";

figma.connect(
  UnpublishedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12441",
  { 
    props: {
    
    },
    example: ({ ...props }) => <UnpublishedOutlined {...props} />
  }
);