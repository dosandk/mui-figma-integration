
import figma from "@figma/code-connect";
import { Calculate } from "@mui/icons-material";

figma.connect(
  Calculate,
  "<FIGMA_ICONS_BASE>?node-id=11673:13206",
  {
    props: {

    },
    example: ({ ...props }) => <Calculate {...props} />
  }
);
