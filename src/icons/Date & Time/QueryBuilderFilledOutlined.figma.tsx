
import figma from "@figma/code-connect";
import { QueryBuilderOutlined } from "@mui/icons-material";

figma.connect(
  QueryBuilderOutlined,
  "<FIGMA_ICONS_BASE>?node-id=7475:72599",
  {
    props: {

    },
    example: ({ ...props }) => <QueryBuilderOutlined {...props} />
  }
);
