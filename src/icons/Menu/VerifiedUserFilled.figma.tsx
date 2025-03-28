
import figma from "@figma/code-connect";
import { VerifiedUser } from "@mui/icons-material";

figma.connect(
  VerifiedUser,
  "<FIGMA_ICONS_BASE>?node-id=11673:13222",
  {
    props: {

    },
    example: ({ ...props }) => <VerifiedUser {...props} />
  }
);
