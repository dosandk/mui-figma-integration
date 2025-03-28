
import figma from "@figma/code-connect";
import { AdminPanelSettings } from "@mui/icons-material";

figma.connect(
  AdminPanelSettings,
  "<FIGMA_ICONS_BASE>?node-id=11673:13200",
  {
    props: {

    },
    example: ({ ...props }) => <AdminPanelSettings {...props} />
  }
);
