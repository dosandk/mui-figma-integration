
import figma from "@figma/code-connect";
import {MyLocationOutlined} from "@mui/icons-material";

figma.connect(
  MyLocationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3144",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MyLocationOutlined {...props} />
  }
);