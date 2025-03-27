
import figma from "@figma/code-connect";
import { ViewColumn } from "@mui/icons-material";

figma.connect(
  ViewColumn,
  "<FIGMA_ICONS_BASE>?node-id=208:101688",
  {
    props: {

    },
    example: ({ ...props }) => <ViewColumn {...props} />
  }
);
