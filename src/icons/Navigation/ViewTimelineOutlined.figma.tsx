
import figma from "@figma/code-connect";
import {ViewTimelineOutlined} from "@mui/icons-material";

figma.connect(
  ViewTimelineOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12731",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ViewTimelineOutlined {...props} />
  }
);