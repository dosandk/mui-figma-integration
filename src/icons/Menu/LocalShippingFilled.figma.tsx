
import figma from "@figma/code-connect";
import { LocalShipping } from "@mui/icons-material";

figma.connect(
  LocalShipping,
  "<FIGMA_ICONS_BASE>?node-id=11673:13148",
  {
    props: {

    },
    example: ({ ...props }) => <LocalShipping {...props} />
  }
);
