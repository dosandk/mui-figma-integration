
import figma from "@figma/code-connect";
import { ShuffleOnOutlined } from "@mui/icons-material";

figma.connect(
  ShuffleOnOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11673:11358",
  {
    props: {

    },
    example: ({ ...props }) => <ShuffleOnOutlined {...props} />
  }
);
