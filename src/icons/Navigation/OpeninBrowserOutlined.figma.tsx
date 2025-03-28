
import figma from "@figma/code-connect";
import { OpenInBrowserOutlined } from "@mui/icons-material";

figma.connect(
  OpenInBrowserOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11714:3463",
  {
    props: {

    },
    example: ({ ...props }) => <OpenInBrowserOutlined {...props} />
  }
);
