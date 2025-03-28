
import figma from "@figma/code-connect";
import { Build } from "@mui/icons-material";

figma.connect(
  Build,
  "<FIGMA_ICONS_BASE>?node-id=11673:13182",
  {
    props: {

    },
    example: ({ ...props }) => <Build {...props} />
  }
);
