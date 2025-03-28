
import figma from "@figma/code-connect";
import { Route } from "@mui/icons-material";

figma.connect(
  Route,
  "<FIGMA_ICONS_BASE>?node-id=11673:13160",
  {
    props: {

    },
    example: ({ ...props }) => <Route {...props} />
  }
);
