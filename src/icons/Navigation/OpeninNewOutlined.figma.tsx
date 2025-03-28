
import figma from "@figma/code-connect";
import { OpenInNewOutlined } from "@mui/icons-material";

figma.connect(
  OpenInNewOutlined,
  "<FIGMA_ICONS_BASE>?node-id=9602:112412",
  {
    props: {

    },
    example: ({ ...props }) => <OpenInNewOutlined {...props} />
  }
);
