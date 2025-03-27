
import figma from "@figma/code-connect";
import { BubbleChart } from "@mui/icons-material";

figma.connect(
  BubbleChart,
  "<FIGMA_ICONS_BASE>?node-id=11673:13202",
  {
    props: {

    },
    example: ({ ...props }) => <BubbleChart {...props} />
  }
);
