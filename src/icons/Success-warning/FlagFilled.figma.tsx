
import figma from "@figma/code-connect";
import { Flag } from "@mui/icons-material";

figma.connect(
  Flag,
  "<FIGMA_ICONS_BASE>?node-id=11673:12471",
  {
    props: {

    },
    example: ({ ...props }) => <Flag {...props} />
  }
);
