
import figma from "@figma/code-connect";
import { ReceiptLong } from "@mui/icons-material";

figma.connect(
  ReceiptLong,
  "<FIGMA_ICONS_BASE>?node-id=11673:13248",
  {
    props: {

    },
    example: ({ ...props }) => <ReceiptLong {...props} />
  }
);
