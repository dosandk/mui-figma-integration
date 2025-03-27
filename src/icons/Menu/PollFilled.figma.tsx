
import figma from "@figma/code-connect";
import { Poll } from "@mui/icons-material";

figma.connect(
  Poll,
  "<FIGMA_ICONS_BASE>?node-id=11673:13254",
  {
    props: {

    },
    example: ({ ...props }) => <Poll {...props} />
  }
);
