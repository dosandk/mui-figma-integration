
import figma from "@figma/code-connect";
import { Info } from "@mui/icons-material";

figma.connect(
  Info,
  "<FIGMA_ICONS_BASE>?node-id=9602:112415",
  {
    props: {

    },
    example: ({ ...props }) => <Info {...props} />
  }
);
