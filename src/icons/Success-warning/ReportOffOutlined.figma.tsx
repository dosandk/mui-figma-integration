
import figma from "@figma/code-connect";
import {ReportOffOutlined} from "@mui/icons-material";

figma.connect(
  ReportOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12413",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReportOffOutlined {...props} />
  }
);