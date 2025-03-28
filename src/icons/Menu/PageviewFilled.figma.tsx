
import figma from "@figma/code-connect";
import { Pageview } from "@mui/icons-material";

figma.connect(
  Pageview,
  "<FIGMA_ICONS_BASE>?node-id=11673:13212",
  {
    props: {

    },
    example: ({ ...props }) => <Pageview {...props} />
  }
);
