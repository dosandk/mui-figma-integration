
import figma from "@figma/code-connect";
import { ViewStream } from "@mui/icons-material";

figma.connect(
  ViewStream,
  "<FIGMA_ICONS_BASE>?node-id=285:93475",
  {
    props: {

    },
    example: ({ ...props }) => <ViewStreamFilled {...props} />
  }
);
