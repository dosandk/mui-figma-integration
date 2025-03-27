
import figma from "@figma/code-connect";
import { SwitchCamera } from "@mui/icons-material";

figma.connect(
  SwitchCamera,
  "<FIGMA_ICONS_BASE>?node-id=11673:13158",
  {
    props: {

    },
    example: ({ ...props }) => <SwitchCamera {...props} />
  }
);
