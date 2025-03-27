
import figma from "@figma/code-connect";
import { Webhook } from "@mui/icons-material";

figma.connect(
  Webhook,
  "<FIGMA_ICONS_BASE>?node-id=11673:13156",
  {
    props: {

    },
    example: ({ ...props }) => <Webhook {...props} />
  }
);
