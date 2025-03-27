
import figma from "@figma/code-connect";
import {AssuredWorkloadOutlined} from "@mui/icons-material";

figma.connect(
  AssuredWorkloadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3838",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AssuredWorkloadOutlined {...props} />
  }
);