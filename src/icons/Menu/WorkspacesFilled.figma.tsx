
import figma from "@figma/code-connect";
import { Workspaces } from "@mui/icons-material";

figma.connect(
  Workspaces,
  "<FIGMA_ICONS_BASE>?node-id=11673:13232",
  {
    props: {

    },
    example: ({ ...props }) => <Workspaces {...props} />
  }
);
