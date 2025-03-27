
import figma from "@figma/code-connect";
import {NewReleasesOutlined} from "@mui/icons-material";

figma.connect(
  NewReleasesOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12434",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NewReleasesOutlined {...props} />
  }
);