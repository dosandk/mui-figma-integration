
import figma from "@figma/code-connect";
import {FormatListBulletedOutlined} from "@mui/icons-material";

figma.connect(
  FormatListBulletedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12320",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatListBulletedOutlined {...props} />
  }
);