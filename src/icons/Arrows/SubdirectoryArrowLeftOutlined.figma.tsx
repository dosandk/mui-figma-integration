
import figma from "@figma/code-connect";
import {SubdirectoryArrowLeftOutlined} from "@mui/icons-material";

figma.connect(
  SubdirectoryArrowLeftOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11403",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SubdirectoryArrowLeftOutlined {...props} />
  }
);