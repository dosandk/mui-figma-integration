
import figma from "@figma/code-connect";
import { ThreePOutlined } from "@mui/icons-material";

figma.connect(
  ThreePOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11673:12102",
  {
    props: {

    },
    example: ({ ...props }) => <ThreePOutlined {...props} />
  }
);
