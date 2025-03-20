import figma from "@figma/code-connect"
import { Snackbar } from "./index"

figma.connect(
  Snackbar,
  "<FIGMA_SNACKBAR>",
  {
    props: {},
    example: (props) => <Snackbar {...props} />,
  },
)
