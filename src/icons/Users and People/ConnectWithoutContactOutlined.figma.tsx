
import figma from "@figma/code-connect";
import {ConnectWithoutContactOutlined} from "@mui/icons-material";

figma.connect(
  ConnectWithoutContactOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11894",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ConnectWithoutContactOutlined {...props} />
  }
);