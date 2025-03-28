
import figma from "@figma/code-connect";
import { DragIndicator } from "@mui/icons-material";

figma.connect(
  DragIndicator,
  "<FIGMA_ICONS_BASE>?node-id=11673:12597",
  {
    props: {

    },
    example: ({ ...props }) => <DragIndicator {...props} />
  }
);
