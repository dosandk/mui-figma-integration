
import figma from "@figma/code-connect";
import {MapsHomeWorkOutlined} from "@mui/icons-material";

figma.connect(
  MapsHomeWorkOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3825",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MapsHomeWorkOutlined {...props} />
  }
);