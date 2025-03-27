
import figma from "@figma/code-connect";
import { OpenInNewOffOutlined } from "@mui/icons-material";

figma.connect(
  OpenInNewOffOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11714:3465",
  {
    props: {

    },
    example: ({ ...props }) => <OpenInNewOffOutlined {...props} />
  }
);
