
import figma from "@figma/code-connect";
import { GroupWork } from "@mui/icons-material";

figma.connect(
  GroupWork,
  "<FIGMA_ICONS_BASE>?node-id=11673:13260",
  {
    props: {

    },
    example: ({ ...props }) => <GroupWork {...props} />
  }
);
