
import figma from "@figma/code-connect";
import {AdminPanelSettingsOutlined} from "@mui/icons-material";

figma.connect(
  AdminPanelSettingsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3409",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AdminPanelSettingsOutlined {...props} />
  }
);