
import figma from "@figma/code-connect";
import { FileCopy } from "@mui/icons-material";

figma.connect(
  FileCopy,
  "<FIGMA_ICONS_BASE>?node-id=11673:13168",
  {
    props: {

    },
    example: ({ ...props }) => <FileCopy {...props} />
  }
);
