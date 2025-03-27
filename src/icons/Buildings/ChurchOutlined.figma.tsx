
import figma from "@figma/code-connect";
import {ChurchOutlined} from "@mui/icons-material";

figma.connect(
  ChurchOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3833",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ChurchOutlined {...props} />
  }
);