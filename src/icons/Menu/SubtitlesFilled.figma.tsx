
import figma from "@figma/code-connect";
import { Subtitles } from "@mui/icons-material";

figma.connect(
  Subtitles,
  "<FIGMA_ICONS_BASE>?node-id=11673:13184",
  {
    props: {

    },
    example: ({ ...props }) => <Subtitles {...props} />
  }
);
