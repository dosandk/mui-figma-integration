
import figma from "@figma/code-connect";
import {SubdirectoryArrowRightOutlined} from "@mui/icons-material";

figma.connect(
  SubdirectoryArrowRightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11401",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SubdirectoryArrowRightOutlined {...props} />
  }
);