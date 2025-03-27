
import figma from "@figma/code-connect";
import {DesignServicesOutlined} from "@mui/icons-material";

figma.connect(
  DesignServicesOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13039",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DesignServicesOutlined {...props} />
  }
);