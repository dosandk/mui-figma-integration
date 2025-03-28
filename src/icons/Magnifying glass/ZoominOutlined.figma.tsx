
import figma from "@figma/code-connect";
import { ZoomInOutlined } from "@mui/icons-material";

figma.connect(
  ZoomInOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11714:3703",
  {
    props: {

    },
    example: ({ ...props }) => <ZoomInOutlined {...props} />
  }
);
