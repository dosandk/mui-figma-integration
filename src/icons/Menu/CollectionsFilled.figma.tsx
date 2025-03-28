
import figma from "@figma/code-connect";
import { Collections } from "@mui/icons-material";

figma.connect(
  Collections,
  "<FIGMA_ICONS_BASE>?node-id=9602:112410",
  {
    props: {

    },
    example: ({ ...props }) => <Collections {...props} />
  }
);
