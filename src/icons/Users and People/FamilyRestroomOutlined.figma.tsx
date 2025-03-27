
import figma from "@figma/code-connect";
import {FamilyRestroomOutlined} from "@mui/icons-material";

figma.connect(
  FamilyRestroomOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867042",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FamilyRestroomOutlined {...props} />
  }
);