
import figma from "@figma/code-connect";
import { ManageAccounts } from "@mui/icons-material";

figma.connect(
  ManageAccounts,
  "<FIGMA_ICONS_BASE>?node-id=11673:13162",
  {
    props: {

    },
    example: ({ ...props }) => <ManageAccounts {...props} />
  }
);
