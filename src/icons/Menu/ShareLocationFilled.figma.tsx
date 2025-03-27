
import figma from "@figma/code-connect";
import { ShareLocation } from "@mui/icons-material";

figma.connect(
  ShareLocation,
  "<FIGMA_ICONS_BASE>?node-id=11673:13172",
  {
    props: {

    },
    example: ({ ...props }) => <ShareLocation {...props} />
  }
);
