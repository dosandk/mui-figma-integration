
import figma from "@figma/code-connect";
import { PieChart } from "@mui/icons-material";

figma.connect(
  PieChart,
  "<FIGMA_ICONS_BASE>?node-id=11673:13192",
  {
    props: {

    },
    example: ({ ...props }) => <PieChart {...props} />
  }
);
