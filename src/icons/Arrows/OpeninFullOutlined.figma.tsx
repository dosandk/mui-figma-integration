
import figma from "@figma/code-connect";
import { OpenInFullOutlined } from "@mui/icons-material";

figma.connect(
  OpenInFullOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11673:11415",
  {
    props: {

    },
    example: ({ ...props }) => <OpenInFullOutlined {...props} />
  }
);
