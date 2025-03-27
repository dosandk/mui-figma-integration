
import figma from "@figma/code-connect";
import {AirlineSeatIndividualSuiteOutlined} from "@mui/icons-material";

figma.connect(
  AirlineSeatIndividualSuiteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867045",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AirlineSeatIndividualSuiteOutlined {...props} />
  }
);