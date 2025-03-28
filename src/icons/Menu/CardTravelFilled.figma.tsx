
import figma from "@figma/code-connect";
import { CardTravel } from "@mui/icons-material";

figma.connect(
  CardTravel,
  "<FIGMA_ICONS_BASE>?node-id=11673:13174",
  {
    props: {

    },
    example: ({ ...props }) => <CardTravel {...props} />
  }
);
