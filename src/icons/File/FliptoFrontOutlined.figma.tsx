
import figma from "@figma/code-connect";
import { FlipToFrontOutlined } from "@mui/icons-material";

figma.connect(
  FlipToFrontOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11714:3595",
  {
    props: {

    },
    example: ({ ...props }) => <FlipToFrontOutlined {...props} />
  }
);
