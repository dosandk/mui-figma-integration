
import figma from "@figma/code-connect";
import {PriceAddOutlined} from "@mui/icons-material";

figma.connect(
  PriceAddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11313",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PriceAddOutlined {...props} />
  }
);