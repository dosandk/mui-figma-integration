
import figma from "@figma/code-connect";
import { Downloading } from "@mui/icons-material";

figma.connect(
  Downloading,
  "<FIGMA_ICONS_BASE>?node-id=11673:13180",
  {
    props: {

    },
    example: ({ ...props }) => <Downloading {...props} />
  }
);
