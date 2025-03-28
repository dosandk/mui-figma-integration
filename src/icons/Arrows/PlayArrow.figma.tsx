
import figma from "@figma/code-connect";
import { PlayArrow } from "@mui/icons-material";

figma.connect(
  PlayArrow,
  "<FIGMA_ICONS_BASE>?node-id=9602:112267",
  {
    props: {

    },
    example: ({ ...props }) => <PlayArrow {...props} />
  }
);
