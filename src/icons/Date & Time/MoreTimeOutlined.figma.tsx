
import figma from "@figma/code-connect";
import {MoreTimeOutlined} from "@mui/icons-material";

figma.connect(
  MoreTimeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866913",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MoreTimeOutlined {...props} />
  }
);