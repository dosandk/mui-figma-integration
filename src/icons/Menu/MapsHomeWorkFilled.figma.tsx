
import figma from "@figma/code-connect";
import { MapsHomeWork } from "@mui/icons-material";

figma.connect(
  MapsHomeWork,
  "<FIGMA_ICONS_BASE>?node-id=11673:13170",
  {
    props: {

    },
    example: ({ ...props }) => <MapsHomeWork {...props} />
  }
);
