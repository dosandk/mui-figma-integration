
import figma from "@figma/code-connect";
import { Handyman } from "@mui/icons-material";

figma.connect(
  Handyman,
  "<FIGMA_ICONS_BASE>?node-id=11673:13258",
  {
    props: {

    },
    example: ({ ...props }) => <Handyman {...props} />
  }
);
