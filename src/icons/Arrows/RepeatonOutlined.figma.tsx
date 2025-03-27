
import figma from "@figma/code-connect";
import { RepeatOnOutlined } from "@mui/icons-material";

figma.connect(
  RepeatOnOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11673:11412",
  {
    props: {

    },
    example: ({ ...props }) => <RepeatOnOutlined {...props} />
  }
);
