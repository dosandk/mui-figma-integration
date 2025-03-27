
import figma from "@figma/code-connect";
import { ViewTimeline } from "@mui/icons-material";

figma.connect(
  ViewTimeline,
  "<FIGMA_ICONS_BASE>?node-id=11673:13234",
  {
    props: {

    },
    example: ({ ...props }) => <ViewTimeline {...props} />
  }
);
