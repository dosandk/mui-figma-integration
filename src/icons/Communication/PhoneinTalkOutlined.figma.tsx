
import figma from "@figma/code-connect";
import { PhoneInTalkOutlined } from "@mui/icons-material";

figma.connect(
  PhoneInTalkOutlined,
  "<FIGMA_ICONS_BASE>?node-id=11714:3038",
  {
    props: {

    },
    example: ({ ...props }) => <PhoneInTalkOutlined {...props} />
  }
);
