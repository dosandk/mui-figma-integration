
import figma from "@figma/code-connect";
import {ReportOutlined} from "@mui/icons-material";

figma.connect(
  ReportOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12409",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReportOutlined {...props} />
  }
);