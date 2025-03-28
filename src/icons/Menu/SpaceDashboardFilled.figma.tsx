
import figma from "@figma/code-connect";
import { SpaceDashboard } from "@mui/icons-material";

figma.connect(
  SpaceDashboard,
  "<FIGMA_ICONS_BASE>?node-id=7475:73288",
  {
    props: {

    },
    example: ({ ...props }) => <SpaceDashboard {...props} />
  }
);
