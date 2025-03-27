
import figma from "@figma/code-connect";
import {WarrantyOutlined} from "@mui/icons-material";

figma.connect(
  WarrantyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13085",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WarrantyOutlined {...props} />
  }
);