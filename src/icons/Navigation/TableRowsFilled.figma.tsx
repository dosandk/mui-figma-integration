
import figma from "@figma/code-connect";
import { TableRows } from "@mui/icons-material";

figma.connect(
  TableRows,
  "<FIGMA_ICONS_BASE>?node-id=208:101686",
  {
    props: {

    },
    example: ({ ...props }) => <TableRows {...props} />
  }
);
