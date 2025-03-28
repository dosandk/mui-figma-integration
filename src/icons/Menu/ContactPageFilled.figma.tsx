
import figma from "@figma/code-connect";
import { ContactPage } from "@mui/icons-material";

figma.connect(
  ContactPage,
  "<FIGMA_ICONS_BASE>?node-id=11673:13268",
  {
    props: {

    },
    example: ({ ...props }) => <ContactPage {...props} />
  }
);
