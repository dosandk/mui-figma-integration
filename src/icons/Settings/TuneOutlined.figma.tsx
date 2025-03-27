
import figma from "@figma/code-connect";
import {TuneOutlined} from "@mui/icons-material";

figma.connect(
  TuneOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13057",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TuneOutlined {...props} />
  }
);