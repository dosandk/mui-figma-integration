
import figma from "@figma/code-connect";
import {WarehouseOutlined} from "@mui/icons-material";

figma.connect(
  WarehouseOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13432",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WarehouseOutlined {...props} />
  }
);