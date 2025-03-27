
import figma from "@figma/code-connect";
import { Inventory } from "@mui/icons-material";

figma.connect(
  Inventory,
  "<FIGMA_ICONS_BASE>?node-id=11673:13204",
  {
    props: {

    },
    example: ({ ...props }) => <Inventory {...props} />
  }
);
