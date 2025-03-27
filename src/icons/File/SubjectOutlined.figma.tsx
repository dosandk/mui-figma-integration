
import figma from "@figma/code-connect";
import {SubjectOutlined} from "@mui/icons-material";

figma.connect(
  SubjectOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12957",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SubjectOutlined {...props} />
  }
);