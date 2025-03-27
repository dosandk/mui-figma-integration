
import figma from "@figma/code-connect";
import {HolidayVillageOutlined} from "@mui/icons-material";

figma.connect(
  HolidayVillageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3811",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HolidayVillageOutlined {...props} />
  }
);