
import figma from "@figma/code-connect";
import { AlarmOnOutlined } from "@mui/icons-material";

figma.connect(
  AlarmOnOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11706:866932",
  {
    props: {

    },
    example: ({ ...props }) => <AlarmOnOutlined {...props} />
  }
);
