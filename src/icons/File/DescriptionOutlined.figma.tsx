
import figma from "@figma/code-connect";
import {DescriptionOutlined} from "@mui/icons-material";

figma.connect(
  DescriptionOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12874",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DescriptionOutlined {...props} />
  }
);