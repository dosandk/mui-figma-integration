
import figma from "@figma/code-connect";
import { Dashboard } from "@mui/icons-material";

figma.connect(
  Dashboard,
  "<FIGMA_ICONS_BASE>?node-id=11673:13264",
  {
    props: {

    },
    example: ({ ...props }) => <Dashboard {...props} />
  }
);
