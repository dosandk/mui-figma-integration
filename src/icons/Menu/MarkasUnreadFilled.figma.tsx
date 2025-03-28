
import figma from "@figma/code-connect";
import { MarkAsUnread } from "@mui/icons-material";

figma.connect(
  MarkAsUnread,
  "<FIGMA_ICONS_BASE>?node-id=11673:13224",
  {
    props: {

    },
    example: ({ ...props }) => <MarkAsUnread {...props} />
  }
);
