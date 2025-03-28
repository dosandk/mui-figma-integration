
import figma from "@figma/code-connect";
import { Task } from "@mui/icons-material";

figma.connect(
  Task,
  "<FIGMA_ICONS_BASE>?node-id=11673:13216",
  {
    props: {

    },
    example: ({ ...props }) => <Task {...props} />
  }
);
