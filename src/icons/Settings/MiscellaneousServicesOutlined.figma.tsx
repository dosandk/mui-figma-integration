
import figma from "@figma/code-connect";
import {MiscellaneousServicesOutlined} from "@mui/icons-material";

figma.connect(
  MiscellaneousServicesOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13043",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MiscellaneousServicesOutlined {...props} />
  }
);