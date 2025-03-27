
import figma from "@figma/code-connect";
import { AllInbox } from "@mui/icons-material";

figma.connect(
  AllInbox,
  "<FIGMA_ICONS_BASE>?node-id=11673:13274",
  {
    props: {

    },
    example: ({ ...props }) => <AllInbox {...props} />
  }
);
