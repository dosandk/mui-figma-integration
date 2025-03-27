
import figma from "@figma/code-connect";
import { SwapHorizontalCircle } from "@mui/icons-material";

figma.connect(
  SwapHorizontalCircle,
  "<FIGMA_ICONS_BASE>?node-id=11673:13238",
  {
    props: {

    },
    example: ({ ...props }) => <SwapHorizontalCircle {...props} />
  }
);
