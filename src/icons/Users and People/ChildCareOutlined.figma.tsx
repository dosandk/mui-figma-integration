
import figma from "@figma/code-connect";
import {ChildCareOutlined} from "@mui/icons-material";

figma.connect(
  ChildCareOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867026",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ChildCareOutlined {...props} />
  }
);