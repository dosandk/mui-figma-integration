
import figma from "@figma/code-connect";
import { Plagiarism } from "@mui/icons-material";

figma.connect(
  Plagiarism,
  "<FIGMA_ICONS_BASE>?node-id=11673:13164",
  {
    props: {

    },
    example: ({ ...props }) => <Plagiarism {...props} />
  }
);
