
import figma from "@figma/code-connect";
import { HealthAndSafetyOutlined } from "@mui/icons-material";

figma.connect(
  HealthAndSafetyOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11714:3420",
  {
    props: {

    },
    example: ({ ...props }) => <HealthAndSafetyOutlined {...props} />
  }
);
