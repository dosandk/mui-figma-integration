
import figma from "@figma/code-connect";
import {DiscFullOutlined} from "@mui/icons-material";

figma.connect(
  DiscFullOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12452",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DiscFullOutlined {...props} />
  }
);