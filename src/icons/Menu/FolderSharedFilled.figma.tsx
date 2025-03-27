
import figma from "@figma/code-connect";
import { FolderShared } from "@mui/icons-material";

figma.connect(
  FolderShared,
  "<FIGMA_ICONS_BASE>?node-id=11673:13210",
  {
    props: {

    },
    example: ({ ...props }) => <FolderShared {...props} />
  }
);
