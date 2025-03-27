
import figma from "@figma/code-connect";
import { PhoneIphone } from "@mui/icons-material";

figma.connect(
  PhoneIphone,
  "<FIGMA_ICONS_BASE>?node-id=9602:112400",
  {
    props: {

    },
    example: ({ ...props }) => <PhoneIphone {...props} />
  }
);
