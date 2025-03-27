
import figma from "@figma/code-connect";
import { RequestPage } from "@mui/icons-material";

figma.connect(
  RequestPage,
  "<FIGMA_ICONS_BASE>?node-id=11673:13246",
  {
    props: {

    },
    example: ({ ...props }) => <RequestPage {...props} />
  }
);
