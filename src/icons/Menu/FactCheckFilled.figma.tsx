
import figma from "@figma/code-connect";
import { FactCheck } from "@mui/icons-material";

figma.connect(
  FactCheck,
  "<FIGMA_ICONS_BASE>?node-id=11673:13262",
  {
    props: {

    },
    example: ({ ...props }) => <FactCheck {...props} />
  }
);
