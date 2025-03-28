
import figma from "@figma/code-connect";
import { ContentPasteSearch } from "@mui/icons-material";

figma.connect(
  ContentPasteSearch,
  "<FIGMA_ICONS_BASE>?node-id=11673:13218",
  {
    props: {

    },
    example: ({ ...props }) => <ContentPasteSearch {...props} />
  }
);
