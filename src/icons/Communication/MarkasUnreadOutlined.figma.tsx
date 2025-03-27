
import figma from "@figma/code-connect";
import { MarkAsUnreadOutlined } from "@mui/icons-material";

figma.connect(
  MarkAsUnreadOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11714:3070",
  {
    props: {

    },
    example: ({ ...props }) => <MarkAsUnreadOutlined {...props} />
  }
);
