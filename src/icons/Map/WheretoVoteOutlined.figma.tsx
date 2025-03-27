
import figma from "@figma/code-connect";
import {WheretoVoteOutlined} from "@mui/icons-material";

figma.connect(
  WheretoVoteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12215",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WheretoVoteOutlined {...props} />
  }
);