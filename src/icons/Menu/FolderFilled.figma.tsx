
import figma from "@figma/code-connect";
import { Folder } from "@mui/icons-material";

figma.connect(
  Folder,
  "<FIGMA_ICONS_BASE>?node-id=7475:61740",
  {
    props: {

    },
    example: ({ ...props }) => <Folder {...props} />
  }
);
