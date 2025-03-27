
import figma from "@figma/code-connect";
import { Widgets } from "@mui/icons-material";

figma.connect(
  Widgets,
  "<FIGMA_ICONS_BASE>?node-id=11673:13188",
  {
    props: {

    },
    example: ({ ...props }) => <Widgets {...props} />
  }
);
