
import figma from "@figma/code-connect";
import { Group } from "@mui/icons-material";

figma.connect(
  Group,
  "<FIGMA_ICONS_BASE>?node-id=11673:13230",
  {
    props: {

    },
    example: ({ ...props }) => <Group {...props} />
  }
);
