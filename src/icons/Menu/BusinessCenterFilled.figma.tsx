
import figma from "@figma/code-connect";
import { BusinessCenter } from "@mui/icons-material";

figma.connect(
  BusinessCenter,
  "<FIGMA_ICONS_BASE>?node-id=11673:13150",
  {
    props: {

    },
    example: ({ ...props }) => <BusinessCenter {...props} />
  }
);
