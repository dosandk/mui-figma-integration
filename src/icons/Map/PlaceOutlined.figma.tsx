
import figma from "@figma/code-connect";
import {PlaceOutlined} from "@mui/icons-material";

figma.connect(
  PlaceOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12198",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlaceOutlined {...props} />
  }
);