
import figma from "@figma/code-connect";
import { NoteAlt } from "@mui/icons-material";

figma.connect(
  NoteAlt,
  "<FIGMA_ICONS_BASE>?node-id=11673:13256",
  {
    props: {

    },
    example: ({ ...props }) => <NoteAlt {...props} />
  }
);
