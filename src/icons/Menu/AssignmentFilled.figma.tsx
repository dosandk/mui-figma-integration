
import figma from "@figma/code-connect";
import { Assignment } from "@mui/icons-material";

figma.connect(
  Assignment,
  "<FIGMA_ICONS_BASE>?node-id=11673:13272",
  {
    props: {

    },
    example: ({ ...props }) => <Assignment {...props} />
  }
);
