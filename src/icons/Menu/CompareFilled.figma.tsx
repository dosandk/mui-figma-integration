
import figma from "@figma/code-connect";
import { Compare } from "@mui/icons-material";

figma.connect(
  Compare,
  "<FIGMA_ICONS_BASE>?node-id=11673:13270",
  {
    props: {

    },
    example: ({ ...props }) => <Compare {...props} />
  }
);
