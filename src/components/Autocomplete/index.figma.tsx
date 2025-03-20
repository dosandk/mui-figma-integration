import { Autocomplete } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  Autocomplete,
  "<FIGMA_AUTOCOMPLETE>",
  {
    props: {
      multiple: figma.boolean("Multiple Value"),
      open: figma.boolean("Open"),
    },
    example: (props) => (
      <Autocomplete {...props} />
    ),
  },
)
