
import figma from "@figma/code-connect";
import { Preview } from "@mui/icons-material";

figma.connect(
  Preview,
  "<FIGMA_ICONS_BASE>?node-id=11673:13252",
  {
    props: {

    },
    example: ({ ...props }) => <Preview {...props} />
  }
);
