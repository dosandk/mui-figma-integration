
import figma from "@figma/code-connect";
import {AttributionOutlined} from "@mui/icons-material";

figma.connect(
  AttributionOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867035",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AttributionOutlined {...props} />
  }
);