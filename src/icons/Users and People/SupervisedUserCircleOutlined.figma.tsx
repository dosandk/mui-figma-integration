
import figma from "@figma/code-connect";
import {SupervisedUserCircleOutlined} from "@mui/icons-material";

figma.connect(
  SupervisedUserCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11748",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SupervisedUserCircleOutlined {...props} />
  }
);