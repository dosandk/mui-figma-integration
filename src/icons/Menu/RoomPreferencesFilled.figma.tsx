
import figma from "@figma/code-connect";
import { RoomPreferences } from "@mui/icons-material";

figma.connect(
  RoomPreferences,
  "<FIGMA_ICONS_BASE>?node-id=11673:13166",
  {
    props: {

    },
    example: ({ ...props }) => <RoomPreferences {...props} />
  }
);
