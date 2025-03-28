
import figma from "@figma/code-connect";
import { SettingsApplications } from "@mui/icons-material";

figma.connect(
  SettingsApplications,
  "<FIGMA_ICONS_BASE>?node-id=11673:13220",
  {
    props: {

    },
    example: ({ ...props }) => <SettingsApplications {...props} />
  }
);
