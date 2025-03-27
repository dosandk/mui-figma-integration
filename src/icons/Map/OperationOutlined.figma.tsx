
import figma from "@figma/code-connect";
import {OperationOutlined} from "@mui/icons-material";

figma.connect(
  OperationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12246",
  { 
    props: {
    
    },
    example: ({ ...props }) => <OperationOutlined {...props} />
  }
);