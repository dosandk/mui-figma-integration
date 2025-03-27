
import figma from "@figma/code-connect";
import { TableView } from "@mui/icons-material";

figma.connect(
  TableView,
  "<FIGMA_ICONS_BASE>?node-id=11673:13176",
  {
    props: {

    },
    example: ({ ...props }) => <TableView {...props} />
  }
);
