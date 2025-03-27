
import figma from "@figma/code-connect";
import { SensorWindow } from "@mui/icons-material";

figma.connect(
  SensorWindow,
  "<FIGMA_ICONS_BASE>?node-id=11673:13244",
  {
    props: {

    },
    example: ({ ...props }) => <SensorWindow {...props} />
  }
);
