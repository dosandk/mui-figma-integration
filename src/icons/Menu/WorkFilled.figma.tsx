
import figma from "@figma/code-connect";
import { Work } from "@mui/icons-material";

figma.connect(
  Work,
  "<FIGMA_ICONS_BASE>?node-id=9602:112404",
  {
    props: {

    },
    example: ({ ...props }) => <Work {...props} />
  }
);
