
import figma from "@figma/code-connect";
import {AnnouncementOutlined} from "@mui/icons-material";

figma.connect(
  AnnouncementOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3068",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AnnouncementOutlined {...props} />
  }
);