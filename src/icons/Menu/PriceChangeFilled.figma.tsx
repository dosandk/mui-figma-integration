
import figma from "@figma/code-connect";
import { PriceChange } from "@mui/icons-material";

figma.connect(
  PriceChange,
  "<FIGMA_ICONS_BASE>?node-id=11673:13250",
  {
    props: {

    },
    example: ({ ...props }) => <PriceChange {...props} />
  }
);
