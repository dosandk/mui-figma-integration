
import figma from "@figma/code-connect";
import {FaceOutlined} from "@mui/icons-material";

figma.connect(
  FaceOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867050",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FaceOutlined {...props} />
  }
);