
import figma from "@figma/code-connect";
import {DifferenceOutlined} from "@mui/icons-material";

figma.connect(
  DifferenceOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3608",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DifferenceOutlined {...props} />
  }
);