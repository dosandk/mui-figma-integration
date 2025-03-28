
import figma from "@figma/code-connect";
import { ModeOfTravelOutlined } from "@mui/icons-material";

figma.connect(
  ModeOfTravelOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11673:12188",
  {
    props: {

    },
    example: ({ ...props }) => <ModeOfTravelOutlined {...props} />
  }
);
