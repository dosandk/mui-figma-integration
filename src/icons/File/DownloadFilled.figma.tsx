
import figma from "@figma/code-connect";
import { Download } from "@mui/icons-material";

figma.connect(
  Download,
  "<FIGMA_ICONS_BASE>?node-id=9602:112422",
  {
    props: {

    },
    example: ({ ...props }) => <Download {...props} />
  }
);
