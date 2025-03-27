
import figma from "@figma/code-connect";
import { FlipToBackOutlined } from "@mui/icons-material";

figma.connect(
  FlipToBackOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11714:3594",
  {
    props: {

    },
    example: ({ ...props }) => <FlipToBackOutlined {...props} />
  }
);
