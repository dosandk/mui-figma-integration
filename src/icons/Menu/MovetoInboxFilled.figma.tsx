
import figma from "@figma/code-connect";
import { MoveToInbox } from "@mui/icons-material";

figma.connect(
  MoveToInbox,
  "<FIGMA_ICONS_BASE>?node-id=11673:13198",
  {
    props: {

    },
    example: ({ ...props }) => <MoveToInbox {...props} />
  }
);
