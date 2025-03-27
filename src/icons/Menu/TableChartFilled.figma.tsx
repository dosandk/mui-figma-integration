
import figma from "@figma/code-connect";
import { TableChart } from "@mui/icons-material";

figma.connect(
  TableChart,
  "<FIGMA_ICONS_BASE>?node-id=11673:13190",
  {
    props: {

    },
    example: ({ ...props }) => <TableChart {...props} />
  }
);
