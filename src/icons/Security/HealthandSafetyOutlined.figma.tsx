
import figma from "@figma/code-connect";
import {HealthandSafetyOutlined} from "@mui/icons-material";

figma.connect(
  HealthandSafetyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3420",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HealthandSafetyOutlined {...props} />
  }
);