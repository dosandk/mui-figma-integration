
import figma from "@figma/code-connect";
import { CurrencyExchange } from "@mui/icons-material";

figma.connect(
  CurrencyExchange,
  "<FIGMA_ICONS_BASE>?node-id=11673:13266",
  {
    props: {

    },
    example: ({ ...props }) => <CurrencyExchange {...props} />
  }
);
