
import figma from "@figma/code-connect";
import { ZoomInMapOutlined } from "@mui/icons-material";

figma.connect(
  ZoomInMapOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11673:11384",
  {
    props: {

    },
    example: ({ ...props }) => <ZoomInMapOutlined {...props} />
  }
);
