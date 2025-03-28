
import figma from "@figma/code-connect";
import { Stars } from "@mui/icons-material";

figma.connect(
  Stars,
  "<FIGMA_ICONS_BASE>?node-id=11673:13242",
  {
    props: {

    },
    example: ({ ...props }) => <Stars {...props} />
  }
);
