
import figma from "@figma/code-connect";
import {AirlineSeatReclineExtraOutlined} from "@mui/icons-material";

figma.connect(
  AirlineSeatReclineExtraOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867066",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AirlineSeatReclineExtraOutlined {...props} />
  }
);