
import figma from "@figma/code-connect";
import { Monitor } from "@mui/icons-material";

figma.connect(
  Monitor,
  "<FIGMA_ICONS_BASE>?node-id=9602:112417",
  {
    props: {

    },
    example: ({ ...props }) => <Monitor {...props} />
  }
);
