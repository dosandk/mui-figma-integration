
import figma from "@figma/code-connect";
import {QuickreplyOutlined} from "@mui/icons-material";

figma.connect(
  QuickreplyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3067",
  { 
    props: {
    
    },
    example: ({ ...props }) => <QuickreplyOutlined {...props} />
  }
);