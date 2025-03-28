
import figma from "@figma/code-connect";
import { Summarize } from "@mui/icons-material";

figma.connect(
  Summarize,
  "<FIGMA_ICONS_BASE>?node-id=11673:13240",
  {
    props: {

    },
    example: ({ ...props }) => <Summarize {...props} />
  }
);
