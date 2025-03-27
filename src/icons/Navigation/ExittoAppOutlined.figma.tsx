
import figma from "@figma/code-connect";
import { ExitToAppOutlined } from "@mui/icons-material";

figma.connect(
  ExitToAppOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11714:3467",
  {
    props: {

    },
    example: ({ ...props }) => <ExitToAppOutlined {...props} />
  }
);
