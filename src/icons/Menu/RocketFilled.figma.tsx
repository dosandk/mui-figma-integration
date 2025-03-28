
import figma from "@figma/code-connect";
import { Rocket } from "@mui/icons-material";

figma.connect(
  Rocket,
  "<FIGMA_ICONS_BASE>?node-id=11673:13154",
  {
    props: {

    },
    example: ({ ...props }) => <Rocket {...props} />
  }
);
